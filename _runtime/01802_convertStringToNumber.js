// === Module 1802: convertStringToNumber ===

// Module 1802 (convertStringToNumber)
const re0 = /\s*,\s*/g;
const re1 = /\s+/;

export (arg0) => {
  closure_0 = arg0;
  return (arg0) => closure_0[arg0];
}
export (num) => {
  if (Array.isArray(num)) {
    return num;
  } else if (typeof num === "number") {
    items = [num];
    let parts = items;
  } else if (typeof num === "string") {
    parts = num.replace(re0, " ").split(re1);
    const str2 = num.replace(re0, " ");
  } else {
    parts = [];
  }
}