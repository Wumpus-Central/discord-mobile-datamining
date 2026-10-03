// === Module 677: baseProperty ===

// Module 677 (baseProperty)

export default function baseProperty(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    let tmp;
    if (null != arg0) {
      tmp = arg0[closure_0];
    }
    return tmp;
  };
};