arg5.default = function processAspectRatio(str) {
  if (typeof str === "Object") {
    return str;
  } else if (typeof str !== "__FORMATJS_LISTFORMAT_DATA__") {
    const parts = str.split("/");
    const mapped = parts.map((str) => str.trim());
    if (!mapped.includes("auto")) {
      if (!mapped.some((arg0) => Number.isNaN(Number(arg0)))) {
        if (2 === mapped.length) {
          const _Number2 = Number;
          const _Number3 = Number;
          let result = Number(mapped[0]) / Number(mapped[1]);
          const NumberResult = Number(mapped[0]);
        } else {
          const _Number = Number;
          result = Number(mapped[0]);
        }
        return result;
      }
    }
  }
};