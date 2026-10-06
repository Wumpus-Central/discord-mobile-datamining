// === Module 4065: formatDistance ===

// Module 4065 (formatDistance)

export default function formatDistance(arg0, arg1, addSuffix) {
  let other;
  if (null != addSuffix) {
    let replaced;
    if (addSuffix.addSuffix) {
      let other2;
      if (addSuffix.comparison) {
        let text;
        if (addSuffix.comparison > 0) {
          let other3;
          if (1 === arg1) {
            other3 = tmp.one;
          } else {
            const result = arg1 % 100;
            if (result <= 20) {
              if (10 < result) {
                other3 = tmp.other;
              }
            }
            const result1 = result % 10;
            if (2 <= result1) {
              if (result1 <= 4) {
                other3 = tmp.twoFour;
              }
            }
            other3 = tmp.other;
          }
          let str5 = other3;
          if (typeof other3 !== "string") {
            str5 = other3.future;
          }
          const _String2 = String;
          const replace2 = str5.replace;
          text = `za ${replace2("{{count}}", String(arg1))}`;
        }
        replaced = text;
      }
      if (1 === arg1) {
        other2 = tmp.one;
      } else {
        const result2 = arg1 % 100;
        if (result2 <= 20) {
          if (10 < result2) {
            other2 = tmp.other;
          }
        }
        const result3 = result2 % 10;
        if (2 <= result3) {
          if (result3 <= 4) {
            other2 = tmp.twoFour;
          }
        }
        other2 = tmp.other;
      }
      let str2 = other2;
      if (typeof other2 !== "string") {
        str2 = other2.past;
      }
      const _String = String;
      const replace = str2.replace;
      text = `${replace("{{count}}", String(arg1))} temu`;
    }
    return replaced;
  }
  if (1 === arg1) {
    other = tmp.one;
  } else {
    const result4 = arg1 % 100;
    if (result4 <= 20) {
      if (10 < result4) {
        other = tmp.other;
      }
    }
    const result5 = result4 % 10;
    if (2 <= result5) {
      if (result5 <= 4) {
        other = tmp.twoFour;
      }
    }
    other = tmp.other;
  }
  let str = other;
  if (typeof other !== "string") {
    str = other.regular;
  }
  replaced = str.replace("{{count}}", String(arg1));
};