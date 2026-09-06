// _runtime/metro/03769__.js
const obj = {
  lessThanXSeconds: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xSeconds: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
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
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xMinutes: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  aboutXHours: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xHours: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xDays: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  aboutXWeeks: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xWeeks: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  aboutXMonths: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xMonths: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  aboutXYears: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  xYears: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  overXYears: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  },
  almostXYears: (arg0, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (obj.past) {
            const past = obj.past;
            if (undefined === past.one) {
              const result = arg0 % 10;
              const result1 = arg0 % 100;
              if (1 === result) {
                if (11 !== result1) {
                  const _String8 = String;
                  let one3 = past.singularNominative.replace("{{count}}", String(arg0));
                }
              }
              if (2 <= result) {
                if (result <= 4) {
                  const _String7 = String;
                  one3 = past.singularGenitive.replace("{{count}}", String(arg0));
                }
              }
              const _String6 = String;
              one3 = past.pluralGenitive.replace("{{count}}", String(arg0));
            }
            one3 = past.one;
          } else {
            const regular2 = obj.regular;
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
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String4 = String;
                one2 = regular2.singularGenitive.replace("{{count}}", String(arg0));
              }
            }
            const _String3 = String;
            one2 = regular2.pluralGenitive.replace("{{count}}", String(arg0));
          }
        }
        if (!obj.future) {
          const regular3 = obj.regular;
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
            }
          }
          if (2 <= result4) {
            if (result4 <= 4) {
              const _String10 = String;
              one4 = regular3.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String9 = String;
          one4 = regular3.pluralGenitive.replace("{{count}}", String(arg0));
        }
        const future = obj.future;
        if (undefined === future.one) {
          const result6 = arg0 % 10;
          const result7 = arg0 % 100;
          if (1 === result6) {
            if (11 !== result7) {
              const _String14 = String;
              let one5 = future.singularNominative.replace("{{count}}", String(arg0));
            }
          }
          if (2 <= result6) {
            if (result6 <= 4) {
              const _String13 = String;
              one5 = future.singularGenitive.replace("{{count}}", String(arg0));
            }
          }
          const _String12 = String;
          one5 = future.pluralGenitive.replace("{{count}}", String(arg0));
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
      }
    }
    if (2 <= result8) {
      if (result8 <= 4) {
        const _String = String;
        one = regular.singularGenitive.replace("{{count}}", String(arg0));
      }
    }
    one = regular.pluralGenitive.replace("{{count}}", String(arg0));
  }
};
let closure_129_0 = { regular: { one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, future: { one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } };
let closure_130_0 = { regular: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, past: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434" }, future: { singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } };
let closure_131_0 = { regular: { one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442" }, future: { one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442" } };
let closure_132_0 = { regular: { singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0430", singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442" }, past: { singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434", singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434", pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434" }, future: { singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443", singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442" } };
let closure_133_0 = { regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043E\u0432" } };
let closure_134_0 = { regular: { singularNominative: "{{count}} \u0447\u0430\u0441", singularGenitive: "{{count}} \u0447\u0430\u0441\u0430", pluralGenitive: "{{count}} \u0447\u0430\u0441\u043E\u0432" } };
let closure_135_0 = { regular: { singularNominative: "{{count}} \u0434\u0435\u043D\u044C", singularGenitive: "{{count}} \u0434\u043D\u044F", pluralGenitive: "{{count}} \u0434\u043D\u0435\u0439" } };
let closure_136_0 = { regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u0438", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044E", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u0438", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044C" } };
let closure_137_0 = { regular: { singularNominative: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044F", singularGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u0438", pluralGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044C" } };
let closure_138_0 = { regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" } };
let closure_139_0 = { regular: { singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430", pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" } };
let closure_140_0 = { regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } };
let closure_141_0 = { regular: { singularNominative: "{{count}} \u0433\u043E\u0434", singularGenitive: "{{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "{{count}} \u043B\u0435\u0442" } };
let closure_142_0 = { regular: { singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u0433\u043E\u0434\u0430", singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } };
let closure_143_0 = { regular: { singularNominative: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } };

export default function formatDistance(arg0, arg1, arg2) {
  return obj[arg0](arg1, arg2);
};
export default exports.default;