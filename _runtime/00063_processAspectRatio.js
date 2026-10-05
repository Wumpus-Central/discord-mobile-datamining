// _runtime/00063_processAspectRatio.js

export default function processAspectRatio(num) {
  if (typeof num === "number") {
    return num;
  } else if (typeof num === "string") {
    const parts = num.split("/");
    const mapped = parts.map((item) => item.trim());
    if (!mapped.includes("auto")) {
      if (!mapped.some((item) => Number.isNaN(Number(item)))) {
        let result;
        if (2 === mapped.length) {
          const _Number2 = Number;
          const _Number3 = Number;
          const NumberResult = Number(mapped[0]);
          result = NumberResult / Number(mapped[1]);
        } else {
          const _Number = Number;
          result = Number(mapped[0]);
        }
        return result;
      }
    }
  }
}
