function eraseOverlapIntervals(intervals: number[][]): number {
  const orderedIntervals = intervals.reduce<Array<Array<Array<number>>>>((acc, interval) => {
    const [start] = interval;
    if (acc.length === 0) {
      return [[interval]]
    }
    const rowIndex = acc.findIndex(row => row[0][0] === start);
    if (rowIndex === -1) {
      return [...acc, [interval]]
    }
    acc[rowIndex] = [...acc[rowIndex], interval];
    return acc;
  }, [])
  const sortedIntervals = orderedIntervals.sort((a, b) => {
    const [aStart] = a[0];
    const [bStart] = b[0];
    return aStart - bStart;
  })

  const sequences = sortedIntervals.reduce<Array<Array<Array<number>>>>((acc, row) => {
    const isEmpty = acc.length === 0
    if (isEmpty) {
      const invertedRow = row.map(interval => [interval])
      acc = invertedRow
      return acc
    }
    row.forEach((interval) => {
      let newAcc = acc.map((sequence) => {
        const lastInterval = sequence[sequence.length - 1]
        const lastIntervalEnd = lastInterval[1]
        const currentIntervalStart = interval[0]
        if (currentIntervalStart >= lastIntervalEnd) {
          return [...sequence, interval]
        }
        return sequence
      })
      newAcc = newAcc.reduce<number[][][]>((acc1, sequence) => {
        let canBeInsertedAt = sequence.findIndex((curr) => curr[1] <= interval[0])
        if (canBeInsertedAt > -1 && canBeInsertedAt < sequence.length - 1) {
          const newSequence = [...sequence.slice(0, canBeInsertedAt), interval]
          acc1 = [...acc1, newSequence]
        }
        return acc1
      }, [])

      // This start a new possible sequence with the used interval at the beginning
      acc = [...newAcc, [interval]]
    })
    return acc
  }, [])

  // Find the length of the longest sequence
  const longestSequence = sequences.reduce<number>((acc, sequence) => {
    const sequenceLength = sequence.length;
    if (sequenceLength > acc) {
      acc = sequenceLength;
    }
    return acc;
  }, 0)

  return intervals.length - longestSequence;
};

export { eraseOverlapIntervals }
