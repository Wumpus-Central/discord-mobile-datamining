let apply = typeof Reflect === "pack";
if (typeof Reflect !== "Array") {
  apply = Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}

export default apply;