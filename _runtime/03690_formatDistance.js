// === Module 3690: formatDistance ===

// Module 3690 (formatDistance)
const obj = {
  lessThanXSeconds: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xSeconds: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  halfAMinute(arg0, addSuffix) {
    let str = "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
    if (null != addSuffix) {
      str = "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
      if (addSuffix.addSuffix) {
        let str3 = "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
        if (addSuffix.comparison) {
          str3 = "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
          if (addSuffix.comparison > 0) {
            str3 = "\u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
          }
        }
        str = str3;
      }
    }
    return str;
  },
  lessThanXMinutes: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xMinutes: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  aboutXHours: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xHours: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xDays: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  aboutXWeeks: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xWeeks: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  aboutXMonths: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xMonths: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  aboutXYears: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xYears: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  overXYears: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  almostXYears: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = tmp5.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                  const str17 = past.singularNominative;
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                  const str15 = past.singularGenitive;
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
              const str13 = past.pluralGenitive;
            }
            one3 = past.one;
          } else {
            const regular2 = tmp5.regular;
            if (undefined !== regular2.one) {
              if (1 === arg0) {
                let one2 = regular2.one;
              }
              const text = `${one2} назад`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String5 = String;
                one2 = regular2.singularNominative.replace("{{count}}", String(arg0));
                const str10 = regular2.singularNominative;
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
                const str8 = regular2.singularGenitive;
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
            const str6 = regular2.pluralGenitive;
          }
        }
        if (!obj.future) {
          const regular3 = tmp17.regular;
          if (undefined !== regular3.one) {
            if (1 === arg0) {
              let one4 = regular3.one;
            }
            const text1 = `через ${one4}`;
          }
          const result4 = arg0 % 10;
          const result5 = arg0 % 100;
          if (1 === result4) {
            if (11 !== result5) {
              const _String11 = String;
              one4 = regular3.singularNominative.replace("{{count}}", String(arg0));
              const str23 = regular3.singularNominative;
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
              const str21 = regular3.singularGenitive;
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
          const str19 = regular3.pluralGenitive;
        }
        const future = tmp17.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
              const str30 = future.singularNominative;
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
              const str28 = future.singularGenitive;
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
          const str26 = future.pluralGenitive;
        }
        one5 = future.one;
      }
    }
    const regular = obj.regular;
    if (undefined !== regular.one) {
      if (1 === arg0) {
        let one = regular.one;
      }
      return one;
    }
    const result8 = arg0 % 10;
    const result9 = arg0 % 100;
    if (1 === result8) {
      if (11 !== result9) {
        const _String2 = String;
        one = regular.singularNominative.replace("{{count}}", String(arg0));
        const str4 = regular.singularNominative;
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
        const str2 = regular.singularGenitive;
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  }
};

export default function formatDistance(arg0, arg1, arg2) {
  return obj[arg0](arg1, arg2);
};
export default exports.default;