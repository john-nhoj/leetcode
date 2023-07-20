type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    if (functions.length === 0) {
      return x
    }
    let result = 0
    for (let i = functions.length - 1; i >= 0; i--) {
      if (i === functions.length - 1) {
        result = functions[i](x)
        continue
      }
      result = functions[i](result)
    }
    return result;
  }
};

export { compose, F }

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
