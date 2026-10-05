// _runtime/17863_basePropertyOf.js

export default function basePropertyOf(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = tmp[arg0];
    }
    return tmp2;
  };
}
