// === Module 15387: _regeneratorRuntime ===

// Module 15387 (_regeneratorRuntime)
import _regeneratorRuntime from "_regeneratorRuntime" /* 15388 */;

const tmp = _regeneratorRuntime();
try {
  globalThis.regeneratorRuntime = tmp;
} catch (err) {
  const _globalThis = globalThis;
  if (typeof globalThis === "object") {
    const _globalThis2 = globalThis;
    globalThis.regeneratorRuntime = tmp;
  } else {
    const _Function = Function;
    Function("r", "regeneratorRuntime = r")(tmp);
  }
}

export default tmp;