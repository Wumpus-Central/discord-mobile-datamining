// _runtime/14165_getPluralRules.js
import getPluralRules from "14166_getPluralRules.js";

let fn;
let fn2;
let fn3;
let fn4;
let fn5;
let fn6;
let items1;
let items10;
let items100;
let items101;
let items102;
let items103;
let items104;
let items105;
let items106;
let items107;
let items108;
let items109;
let items11;
let items110;
let items111;
let items112;
let items113;
let items114;
let items115;
let items116;
let items117;
let items118;
let items119;
let items12;
let items120;
let items13;
let items14;
let items15;
let items16;
let items17;
let items18;
let items19;
let items2;
let items20;
let items21;
let items22;
let items23;
let items24;
let items25;
let items26;
let items27;
let items28;
let items29;
let items3;
let items30;
let items31;
let items32;
let items33;
let items34;
let items35;
let items36;
let items37;
let items38;
let items39;
let items4;
let items40;
let items41;
let items42;
let items43;
let items44;
let items45;
let items46;
let items47;
let items48;
let items49;
let items5;
let items50;
let items51;
let items52;
let items53;
let items54;
let items55;
let items56;
let items57;
let items58;
let items59;
let items6;
let items60;
let items61;
let items62;
let items63;
let items64;
let items65;
let items66;
let items67;
let items68;
let items69;
let items7;
let items70;
let items71;
let items72;
let items73;
let items74;
let items75;
let items76;
let items77;
let items78;
let items79;
let items8;
let items80;
let items81;
let items82;
let items83;
let items84;
let items85;
let items86;
let items87;
let items88;
let items89;
let items9;
let items90;
let items91;
let items92;
let items93;
let items94;
let items95;
let items96;
let items97;
let items98;
let items99;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj20;
let obj21;
let obj22;
let obj23;
let obj24;
let obj25;
let obj26;
let obj27;
let obj28;
let obj29;
let obj30;
let obj31;
let obj32;
let obj33;
let obj34;
let obj35;
let obj36;
let obj37;
let obj38;
let obj39;
let obj40;
let obj41;
let obj42;
let obj43;
let obj44;
let obj45;
let obj46;
let obj47;
let obj48;
let obj49;
let obj50;
let obj51;
let obj52;
let obj53;
let obj54;
let obj55;
let obj56;
let obj57;
let obj58;
let obj59;
let obj60;
let obj61;
let obj62;
let obj63;
let obj8;
let obj9;
const f116108 = (item) => {
  let closure_0 = item;
  let tmp = item && typeof item !== "string";
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(item);
  }
  if (tmp) {
    let _Object = Object;
    const keys = Object.keys(item);
    item = keys.forEach((item) => {
      function get() {
        return item[item];
      }
      if ("default" !== item) {
        if (!(item in item)) {
          const _Object = Object;
          let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(item, item);
          const _Object2 = Object;
          if (!ownPropertyDescriptor.get) {
            ownPropertyDescriptor = { enumerable: true, get };
            const obj = { enumerable: true, get };
          }
          defineProperty(tmp, item, ownPropertyDescriptor);
        }
      }
    });
  }
};
if (getPluralRules) {
  let obj;
  if (typeof getPluralRules === "object") {
    let str8 = "default";
    obj = getPluralRules;
  }
  let tmp2 = globalThis;
  const _globalThis = globalThis;
  if (typeof globalThis !== "undefined") {
    const _globalThis2 = globalThis;
  } else {
    const _window2 = window;
    if (typeof window !== "undefined") {
      const _window = window;
    } else if (undefined === global) {
      const _self = self;
      if (typeof self !== "undefined") {
        const _self2 = self;
      }
    }
  }
  const obj2 = {
    af: fn,
    ak: fn2,
    am: fn3,
    an: fn,
    ar(arg0, arg1) {
      const str = String(arg0);
      const parts = str.split(".");
      let substr = Number(parts[0]) == arg0;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-2);
      }
      let str2 = "other";
      if (!arg1) {
        let str3 = "zero";
        if (0 != arg0) {
          let str4 = "one";
          if (1 != arg0) {
            let str5 = "two";
            if (2 != arg0) {
              let str6;
              if (substr < 3) {
                let str7 = "other";
                if (substr >= 11) {
                  str7 = "other";
                  if (substr <= 99) {
                    str7 = "many";
                  }
                }
                str6 = str7;
              } else {
                str6 = "few";
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    },
    ars(arg0, arg1) {
      const str = String(arg0);
      const parts = str.split(".");
      let substr = Number(parts[0]) == arg0;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-2);
      }
      let str2 = "other";
      if (!arg1) {
        let str3 = "zero";
        if (0 != arg0) {
          let str4 = "one";
          if (1 != arg0) {
            let str5 = "two";
            if (2 != arg0) {
              let str6;
              if (substr < 3) {
                let str7 = "other";
                if (substr >= 11) {
                  str7 = "other";
                  if (substr <= 99) {
                    str7 = "many";
                  }
                }
                str6 = str7;
              } else {
                str6 = "few";
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    },
    as(arg0, arg1) {
      let str2;
      const tmp = arg1;
      if (tmp) {
        let str4 = "one";
        if (1 != arg0) {
          str4 = "one";
          if (5 != arg0) {
            str4 = "one";
            if (7 != arg0) {
              str4 = "one";
              if (8 != arg0) {
                str4 = "one";
                if (9 != arg0) {
                  str4 = "one";
                  if (10 != arg0) {
                    let str6 = "two";
                    if (2 != arg0) {
                      str6 = "two";
                      if (3 != arg0) {
                        let str7 = "few";
                        if (4 != arg0) {
                          let str8 = "other";
                          if (6 == arg0) {
                            str8 = "many";
                          }
                          str7 = str8;
                        }
                        str6 = str7;
                      }
                    }
                    str4 = str6;
                  }
                }
              }
            }
          }
        }
        str2 = str4;
      } else {
        str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 <= 1) {
            str2 = "one";
          }
        }
      }
      return str2;
    },
    asa: fn,
    ast: fn4,
    az(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const first = str.split(".")[0];
      const substr = first.slice(-1);
      const substr1 = first.slice(-2);
      const substr2 = first.slice(-3);
      const tmp4 = arg1;
      if (tmp4) {
        let str4 = "one";
        if (1 != substr) {
          str4 = "one";
          if (2 != substr) {
            str4 = "one";
            if (5 != substr) {
              str4 = "one";
              if (7 != substr) {
                str4 = "one";
                if (8 != substr) {
                  str4 = "one";
                  if (20 != substr1) {
                    str4 = "one";
                    if (50 != substr1) {
                      str4 = "one";
                      if (70 != substr1) {
                        str4 = "one";
                        if (80 != substr1) {
                          let str6 = "few";
                          if (3 != substr) {
                            str6 = "few";
                            if (4 != substr) {
                              str6 = "few";
                              if (100 != substr2) {
                                str6 = "few";
                                if (200 != substr2) {
                                  str6 = "few";
                                  if (300 != substr2) {
                                    str6 = "few";
                                    if (400 != substr2) {
                                      str6 = "few";
                                      if (500 != substr2) {
                                        str6 = "few";
                                        if (600 != substr2) {
                                          str6 = "few";
                                          if (700 != substr2) {
                                            str6 = "few";
                                            if (800 != substr2) {
                                              str6 = "few";
                                              if (900 != substr2) {
                                                if (0 != first) {
                                                  if (6 != substr) {
                                                    if (40 != substr1) {
                                                      let str7;
                                                      if (60 != substr1) {
                                                        str7 = "other";
                                                      }
                                                      str6 = str7;
                                                    }
                                                  }
                                                }
                                                str7 = "many";
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          str4 = str6;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        str2 = str4;
      } else {
        str2 = "other";
        if (1 == arg0) {
          str2 = "one";
        }
      }
      return str2;
    },
    bal(arg0, arg1) {
      let str = "other";
      if (1 == arg0) {
        str = "one";
      }
      return str;
    },
    be(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = Number(parts[0]) == arg0;
      let substr = tmp2;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      let substr1 = tmp2;
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      const tmp5 = arg1;
      if (tmp5) {
        if (2 == substr) {
          let str7;
          if (12 != substr1) {
            str7 = "few";
          }
          str2 = str7;
        }
        str7 = "other";
      } else if (1 != substr) {
        let str4;
        if (substr >= 2) {
          if (substr <= 4) {
            str4 = "few";
            if (substr1 >= 12) {
              str4 = "few";
            }
          }
          str2 = str4;
        }
        if (!tmp2) {
          if (substr < 5) {
            let str6 = "other";
            if (substr1 >= 11) {
              str6 = "other";
            }
            str4 = str6;
          }
        }
        str6 = "many";
      } else {
        str2 = "one";
      }
      return str2;
    },
    bem: fn,
    bez: fn,
    bg: fn,
    bho: fn2,
    bm: fn5,
    bn(arg0, arg1) {
      let str2;
      const tmp = arg1;
      if (tmp) {
        let str4 = "one";
        if (1 != arg0) {
          str4 = "one";
          if (5 != arg0) {
            str4 = "one";
            if (7 != arg0) {
              str4 = "one";
              if (8 != arg0) {
                str4 = "one";
                if (9 != arg0) {
                  str4 = "one";
                  if (10 != arg0) {
                    let str6 = "two";
                    if (2 != arg0) {
                      str6 = "two";
                      if (3 != arg0) {
                        let str7 = "few";
                        if (4 != arg0) {
                          let str8 = "other";
                          if (6 == arg0) {
                            str8 = "many";
                          }
                          str7 = str8;
                        }
                        str6 = str7;
                      }
                    }
                    str4 = str6;
                  }
                }
              }
            }
          }
        }
        str2 = str4;
      } else {
        str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 <= 1) {
            str2 = "one";
          }
        }
      }
      return str2;
    },
    bo: fn5,
    br(arg0, arg1) {
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = Number(parts[0]) == arg0;
      let substr = tmp2;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      let substr1 = tmp2;
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      let substr2 = tmp2;
      if (substr2) {
        const first2 = parts[0];
        substr2 = first2.slice(-6);
      }
      let str2 = "other";
      if (!arg1) {
        let str3;
        let str4;
        let str6;
        if (1 == substr) {
          if (11 != substr1) {
            if (71 != substr1) {
              str3 = "one";
            }
            str2 = str3;
          }
        }
        if (2 == substr) {
          if (12 != substr1) {
            if (72 != substr1) {
              str4 = "two";
            }
            str3 = str4;
          }
        }
        if (3 != substr) {
          let str7 = "other";
          if (0 != arg0) {
            str7 = "other";
            if (tmp2) {
              str7 = "other";
              if (0 == substr2) {
                str7 = "many";
              }
            }
          }
          str6 = str7;
          str4 = str6;
        }
        if (substr1 < 10) {
          if (substr1 < 70) {
            str6 = "few";
            if (substr1 >= 90) {
              str6 = "few";
            }
          }
        }
      }
      return str2;
    },
    brx: fn,
    bs(arg0, arg1) {
      let str4;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const substr = first.slice(-1);
      const substr1 = first.slice(-2);
      const substr2 = arr2.slice(-1);
      const substr3 = arr2.slice(-2);
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (!parts[1]) {
          if (1 == substr) {
            str3 = "one";
          }
          str2 = str3;
        }
        if (1 != substr2) {
          if (!parts[1]) {
            if (substr >= 2) {
              if (substr <= 4) {
                if (substr1 >= 12) {
                  str3 = str4;
                }
              }
              str4 = "few";
            }
          }
          str4 = "other";
          if (substr2 >= 2) {
            str4 = "other";
            if (substr2 <= 4) {
              if (substr3 >= 12) {
                str4 = "other";
              }
            }
          }
        } else {
          str3 = "one";
        }
      }
      return str2;
    },
    ca(arg0, arg1) {
      let str2;
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      const tmp5 = arg1;
      if (tmp5) {
        let str6 = "one";
        if (1 != arg0) {
          str6 = "one";
          if (3 != arg0) {
            let str7 = "two";
            if (2 != arg0) {
              let str8 = "other";
              if (4 == arg0) {
                str8 = "few";
              }
              str7 = str8;
            }
            str6 = str7;
          }
        }
        str2 = str6;
      } else if (1 != arg0) {
        let str4 = "other";
        if (0 != tmp2) {
          str4 = "other";
          if (0 == tmp4) {
            str4 = "other";
            if (!tmp3) {
              str4 = "many";
            }
          }
        }
        str2 = str4;
      } else {
        str2 = "one";
      }
      return str2;
    },
    ce: fn,
    ceb(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const arr2 = parts[1] || "";
      const substr = first.slice(-1);
      const substr1 = arr2.slice(-1);
      let str2 = "other";
      if (!arg1) {
        if (parts[1]) {
          if (!parts[1]) {
            if (4 != substr) {
              if (6 != substr) {
                str2 = str3;
              }
            }
          }
          str3 = "other";
          if (parts[1]) {
            str3 = "other";
            if (4 != substr1) {
              str3 = "other";
              if (6 != substr1) {
                str3 = "other";
              }
            }
          }
        }
        str3 = "one";
      }
      return str2;
    },
    cgg: fn,
    chr: fn,
    ckb: fn,
    cs(arg0, arg1) {
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (1 != arg0) {
          if (tmp2 >= 2) {
            let str4;
            if (tmp2 <= 4) {
              str4 = "few";
            }
            str3 = str4;
          }
          let str5 = "many";
          if (!tmp3) {
            str5 = "other";
          }
          str4 = str5;
        } else {
          str3 = "one";
        }
        str2 = str3;
      }
      return str2;
    },
    cy(arg0, arg1) {
      let str;
      const tmp2 = arg1;
      if (tmp2) {
        let str6 = "zero";
        if (0 != arg0) {
          str6 = "zero";
          if (7 != arg0) {
            str6 = "zero";
            if (8 != arg0) {
              str6 = "zero";
              if (9 != arg0) {
                let str7 = "one";
                if (1 != arg0) {
                  let str8 = "two";
                  if (2 != arg0) {
                    let str10 = "few";
                    if (3 != arg0) {
                      str10 = "few";
                      if (4 != arg0) {
                        let str11;
                        if (5 == arg0) {
                          str11 = "many";
                        } else {
                          str11 = "other";
                        }
                        str10 = str11;
                      }
                    }
                    str8 = str10;
                  }
                  str7 = str8;
                }
                str6 = str7;
              }
            }
          }
        }
        str = str6;
      } else {
        str = "zero";
        if (0 != arg0) {
          let str2 = "one";
          if (1 != arg0) {
            let str3 = "two";
            if (2 != arg0) {
              let str4 = "few";
              if (3 != arg0) {
                let str5 = "other";
                if (6 == arg0) {
                  str5 = "many";
                }
                str4 = str5;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          str = str2;
        }
      }
      return str;
    },
    da(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const tmp4 = arg1;
      if (tmp4) {
        str3 = "other";
      } else {
        str3 = "one";
        if (1 != arg0) {
          if (!tmp3) {
            str3 = "one";
            if (0 != first) {
              str3 = "one";
            }
          }
        }
      }
      return str3;
    },
    de: fn4,
    doi: fn3,
    dsb(arg0, arg1) {
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const arr2 = parts[1] || "";
      const substr = first.slice(-2);
      const substr1 = arr2.slice(-2);
      let str2 = "other";
      let str3 = "other";
      if (!arg1) {
        let str4;
        if (parts[1]) {
          str4 = "one";
          if (1 != substr1) {
            let str5;
            if (parts[1]) {
              str5 = "two";
              if (2 != substr1) {
                if (parts[1]) {
                  str5 = str2;
                }
                str2 = "few";
              }
            } else {
              str5 = "two";
            }
            str4 = str5;
          }
        } else {
          str4 = "one";
        }
        str3 = str4;
      }
      return str3;
    },
    dv: fn,
    dz: fn5,
    ee: fn,
    el: fn,
    en(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = parts[1];
      let substr1 = Number(parts[0]) == arg0;
      let substr = substr1;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      if (arg1) {
        let str4;
        if (1 != substr) {
          let str5;
          if (2 != substr) {
            let str7 = "other";
            if (3 == substr) {
              str7 = "other";
              if (13 != substr1) {
                str7 = "few";
              }
            }
            str5 = str7;
          } else {
            str5 = "two";
          }
          str4 = str5;
        } else {
          str4 = "one";
        }
        str3 = str4;
      } else {
        str3 = "other";
        if (1 == arg0) {
          str3 = "other";
          if (!tmp2) {
            str3 = "one";
          }
        }
      }
      return str3;
    },
    eo: fn,
    es(arg0, arg1) {
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      let str2 = "other";
      if (!arg1) {
        let str3 = "one";
        if (1 != arg0) {
          let str4 = "other";
          if (0 != tmp2) {
            str4 = "other";
            if (0 == tmp4) {
              str4 = "other";
              if (!tmp3) {
                str4 = "many";
              }
            }
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    },
    et: fn4,
    eu: fn,
    fa: fn3,
    ff(arg0, arg1) {
      let str = "other";
      if (!arg1) {
        let str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 < 2) {
            str2 = "one";
          }
        }
        str = str2;
      }
      return str;
    },
    fi: fn4,
    fil(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const arr2 = parts[1] || "";
      const substr = first.slice(-1);
      const substr1 = arr2.slice(-1);
      if (arg1) {
        let str4 = "other";
        if (1 == arg0) {
          str4 = "one";
        }
        str3 = str4;
      } else {
        if (parts[1]) {
          str3 = "other";
          if (parts[1]) {
            str3 = "other";
            if (4 != substr1) {
              str3 = "other";
              if (6 != substr1) {
                str3 = "other";
              }
            }
          }
        }
        str3 = "one";
      }
      return str3;
    },
    fo: fn,
    fr(arg0, arg1) {
      let str2;
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      const tmp5 = arg1;
      if (tmp5) {
        let str5 = "other";
        if (1 == arg0) {
          str5 = "one";
        }
        str2 = str5;
      } else if (arg0 < 0) {
        let str4 = "other";
        if (0 != tmp2) {
          str4 = "other";
          if (0 == tmp4) {
            str4 = "other";
            if (!tmp3) {
              str4 = "many";
            }
          }
        }
        str2 = str4;
      } else {
        str2 = "one";
      }
      return str2;
    },
    fur: fn,
    fy: fn4,
    ga(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const tmp = Number(str.split(".")[0]) == arg0;
      const tmp3 = arg1;
      if (tmp3) {
        let str7 = "other";
        if (1 == arg0) {
          str7 = "one";
        }
        str2 = str7;
      } else {
        str2 = "one";
        if (1 != arg0) {
          let str3 = "two";
          if (2 != arg0) {
            if (tmp) {
              let str4;
              if (arg0 >= 3) {
                str4 = "few";
              }
              str3 = str4;
            }
            let str6 = "other";
            if (tmp) {
              str6 = "other";
              if (arg0 >= 7) {
                str6 = "other";
                if (arg0 <= 10) {
                  str6 = "many";
                }
              }
            }
            str4 = str6;
          }
          str2 = str3;
        }
      }
      return str2;
    },
    gd(arg0, arg1) {
      let str2;
      let str6;
      const str = String(arg0);
      const tmp = Number(str.split(".")[0]) == arg0;
      const tmp3 = arg1;
      if (tmp3) {
        let str7 = "one";
        if (1 != arg0) {
          str7 = "one";
          if (11 != arg0) {
            let str9 = "two";
            if (2 != arg0) {
              str9 = "two";
              if (12 != arg0) {
                let str10;
                if (3 == arg0) {
                  str10 = "few";
                } else {
                  str10 = "other";
                }
                str9 = str10;
              }
            }
            str7 = str9;
          }
        }
        str2 = str7;
      } else {
        str2 = "one";
        if (1 != arg0) {
          str2 = "one";
          if (11 != arg0) {
            let str4 = "two";
            if (2 != arg0) {
              str4 = "two";
              if (12 != arg0) {
                if (tmp) {
                  if (arg0 >= 3) {
                    str4 = str6;
                  }
                  str6 = "few";
                }
                str6 = "other";
                if (tmp) {
                  str6 = "other";
                  if (arg0 >= 13) {
                    str6 = "other";
                  }
                }
              }
            }
            str2 = str4;
          }
        }
      }
      return str2;
    },
    gl: fn4,
    gsw: fn,
    gu(arg0, arg1) {
      let str2;
      const tmp = arg1;
      if (tmp) {
        let str3 = "one";
        if (1 != arg0) {
          let str5 = "two";
          if (2 != arg0) {
            str5 = "two";
            if (3 != arg0) {
              let str6 = "few";
              if (4 != arg0) {
                let str7 = "other";
                if (6 == arg0) {
                  str7 = "many";
                }
                str6 = str7;
              }
              str5 = str6;
            }
          }
          str3 = str5;
        }
        str2 = str3;
      } else {
        str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 <= 1) {
            str2 = "one";
          }
        }
      }
      return str2;
    },
    guw: fn2,
    gv(arg0, arg1) {
      let arr;
      let tmp2;
      const str = String(arg0);
      const parts = str.split(".");
      [arr, tmp2] = parts;
      const substr = arr.slice(-1);
      const substr1 = arr.slice(-2);
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (tmp2) {
          let str4;
          if (tmp2) {
            let str6;
            if (tmp2) {
              let str7 = "many";
              if (!tmp2) {
                str7 = "other";
              }
              str6 = str7;
            } else {
              str6 = "few";
              if (0 != substr1) {
                str6 = "few";
                if (20 != substr1) {
                  str6 = "few";
                  if (40 != substr1) {
                    str6 = "few";
                    if (60 != substr1) {
                      str6 = "few";
                    }
                  }
                }
              }
            }
            str4 = str6;
          } else {
            str4 = "two";
          }
          str3 = str4;
        } else {
          str3 = "one";
        }
        str2 = str3;
      }
      return str2;
    },
    ha: fn,
    haw: fn,
    he(arg0, arg1) {
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (1 != tmp2) {
          if (0 != tmp2) {
            let str4 = "other";
            if (2 == tmp2) {
              str4 = "other";
              if (!tmp3) {
                str4 = "two";
              }
            }
            str3 = str4;
          } else {
            str3 = "one";
          }
        } else {
          str3 = "one";
        }
        str2 = str3;
      }
      return str2;
    },
    hi(arg0, arg1) {
      let str2;
      const tmp = arg1;
      if (tmp) {
        let str3 = "one";
        if (1 != arg0) {
          let str5 = "two";
          if (2 != arg0) {
            str5 = "two";
            if (3 != arg0) {
              let str6 = "few";
              if (4 != arg0) {
                let str7 = "other";
                if (6 == arg0) {
                  str7 = "many";
                }
                str6 = str7;
              }
              str5 = str6;
            }
          }
          str3 = str5;
        }
        str2 = str3;
      } else {
        str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 <= 1) {
            str2 = "one";
          }
        }
      }
      return str2;
    },
    hnj: fn5,
    hr(arg0, arg1) {
      let str4;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const substr = first.slice(-1);
      const substr1 = first.slice(-2);
      const substr2 = arr2.slice(-1);
      const substr3 = arr2.slice(-2);
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (!parts[1]) {
          if (1 == substr) {
            str3 = "one";
          }
          str2 = str3;
        }
        if (1 != substr2) {
          if (!parts[1]) {
            if (substr >= 2) {
              if (substr <= 4) {
                if (substr1 >= 12) {
                  str3 = str4;
                }
              }
              str4 = "few";
            }
          }
          str4 = "other";
          if (substr2 >= 2) {
            str4 = "other";
            if (substr2 <= 4) {
              if (substr3 >= 12) {
                str4 = "other";
              }
            }
          }
        } else {
          str3 = "one";
        }
      }
      return str2;
    },
    hsb(arg0, arg1) {
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const arr2 = parts[1] || "";
      const substr = first.slice(-2);
      const substr1 = arr2.slice(-2);
      let str2 = "other";
      let str3 = "other";
      if (!arg1) {
        let str4;
        if (parts[1]) {
          str4 = "one";
          if (1 != substr1) {
            let str5;
            if (parts[1]) {
              str5 = "two";
              if (2 != substr1) {
                if (parts[1]) {
                  str5 = str2;
                }
                str2 = "few";
              }
            } else {
              str5 = "two";
            }
            str4 = str5;
          }
        } else {
          str4 = "one";
        }
        str3 = str4;
      }
      return str3;
    },
    hu(arg0, arg1) {
      let str;
      const tmp = arg1;
      if (tmp) {
        let str2;
        if (1 == arg0) {
          str2 = "one";
        } else {
          str2 = "other";
        }
        str = str2;
      } else {
        str = "other";
        if (1 == arg0) {
          str = "one";
        }
      }
      return str;
    },
    hy(arg0, arg1) {
      let str2;
      const tmp = arg1;
      if (tmp) {
        let str3 = "other";
        if (1 == arg0) {
          str3 = "one";
        }
        str2 = str3;
      } else {
        str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 < 2) {
            str2 = "one";
          }
        }
      }
      return str2;
    },
    ia: fn4,
    id: fn5,
    ig: fn5,
    ii: fn5,
    io: fn4,
    is(arg0, arg1) {
      let str4;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const str2 = parts[1] || "";
      const replaced = str2.replace(/0+$/, "");
      const tmp3 = Number(parts[0]) == arg0;
      const substr = first.slice(-1);
      let str3 = "other";
      if (!arg1) {
        if (tmp3) {
          if (1 == substr) {
            str3 = str4;
          }
          str4 = "one";
        }
        str4 = "other";
        if (replaced % 10 === 1) {
          str4 = "other";
        }
      }
      return str3;
    },
    it(arg0, arg1) {
      let str2;
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      const tmp5 = arg1;
      if (tmp5) {
        if (11 != arg0) {
          if (8 != arg0) {
            let str5;
            if (80 != arg0) {
              str5 = "other";
            }
            str2 = str5;
          }
        }
        str5 = "many";
      } else if (1 != arg0) {
        let str4 = "other";
        if (0 != tmp2) {
          str4 = "other";
          if (0 == tmp4) {
            str4 = "other";
            if (!tmp3) {
              str4 = "many";
            }
          }
        }
        str2 = str4;
      } else {
        str2 = "one";
      }
      return str2;
    },
    iu: fn6,
    ja: fn5,
    jbo: fn5,
    jgo: fn,
    jmc: fn,
    jv: fn5,
    jw: fn5,
    ka(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const first = str.split(".")[0];
      const substr = first.slice(-2);
      const tmp2 = arg1;
      if (tmp2) {
        let str3 = "one";
        if (1 != first) {
          if (0 != first) {
            if (substr < 2) {
              if (40 != substr) {
                let str4;
                if (60 != substr) {
                  str4 = "other";
                }
                str3 = str4;
              }
            }
          }
          str4 = "many";
        }
        str2 = str3;
      } else {
        str2 = "other";
        if (1 == arg0) {
          str2 = "one";
        }
      }
      return str2;
    },
    kab(arg0, arg1) {
      let str = "other";
      if (!arg1) {
        let str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 < 2) {
            str2 = "one";
          }
        }
        str = str2;
      }
      return str;
    },
    kaj: fn,
    kcg: fn,
    kde: fn5,
    kea: fn5,
    kk(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = Number(parts[0]) == arg0;
      let substr = tmp2;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      const tmp4 = arg1;
      if (tmp4) {
        if (6 != substr) {
          let str4;
          if (9 != substr) {
            str4 = "other";
            if (tmp2) {
              str4 = "other";
              if (0 == substr) {
                str4 = "other";
              }
            }
          }
          str2 = str4;
        }
        str4 = "many";
      } else {
        str2 = "other";
        if (1 == arg0) {
          str2 = "one";
        }
      }
      return str2;
    },
    kkj: fn,
    kl: fn,
    km: fn5,
    kn: fn3,
    ko: fn5,
    ks: fn,
    ksb: fn,
    ksh(arg0, arg1) {
      let str = "other";
      let str2 = "other";
      if (!arg1) {
        let str3 = "zero";
        if (0 != arg0) {
          if (1 == arg0) {
            str = "one";
          }
          str3 = str;
        }
        str2 = str3;
      }
      return str2;
    },
    ku: fn,
    kw(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = Number(parts[0]) == arg0;
      let substr = tmp2;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-2);
      }
      let substr1 = tmp2;
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-3);
      }
      let substr2 = tmp2;
      if (substr2) {
        const first2 = parts[0];
        substr2 = first2.slice(-5);
      }
      let substr3 = tmp2;
      if (substr3) {
        const first3 = parts[0];
        substr3 = first3.slice(-6);
      }
      const tmp7 = arg1;
      if (tmp7) {
        let str10;
        if (tmp2) {
          if (arg0 >= 1) {
            str10 = "one";
          }
          str2 = str10;
        }
        if (substr < 1) {
          if (substr < 21) {
            if (substr < 41) {
              if (substr < 61) {
                if (substr < 81) {
                  let str11;
                  if (5 == arg0) {
                    str11 = "many";
                  } else {
                    str11 = "other";
                  }
                  str10 = str11;
                } else {
                  str10 = "one";
                }
              } else {
                str10 = "one";
              }
            } else {
              str10 = "one";
            }
          } else {
            str10 = "one";
          }
        } else {
          str10 = "one";
        }
      } else {
        str2 = "zero";
        if (0 != arg0) {
          let str3 = "one";
          if (1 != arg0) {
            let str5 = "two";
            if (2 != substr) {
              str5 = "two";
              if (22 != substr) {
                str5 = "two";
                if (42 != substr) {
                  str5 = "two";
                  if (62 != substr) {
                    str5 = "two";
                    if (82 != substr) {
                      if (tmp2) {
                        if (0 == substr1) {
                          if (substr2 < 1000) {
                            str5 = "two";
                            if (40000 != substr2) {
                              str5 = "two";
                              if (60000 != substr2) {
                                str5 = "two";
                              }
                            }
                          } else {
                            str5 = "two";
                          }
                        }
                      }
                      if (0 == arg0) {
                        let str7 = "few";
                        if (3 != substr) {
                          str7 = "few";
                          if (23 != substr) {
                            str7 = "few";
                            if (43 != substr) {
                              str7 = "few";
                              if (63 != substr) {
                                str7 = "few";
                                if (83 != substr) {
                                  let str9;
                                  if (1 == arg0) {
                                    str9 = "other";
                                  } else {
                                    str9 = "many";
                                    if (1 != substr) {
                                      str9 = "many";
                                      if (21 != substr) {
                                        str9 = "many";
                                        if (41 != substr) {
                                          str9 = "many";
                                          if (61 != substr) {
                                            str9 = "many";
                                          }
                                        }
                                      }
                                    }
                                  }
                                  str7 = str9;
                                }
                              }
                            }
                          }
                        }
                        str5 = str7;
                      } else {
                        str5 = "two";
                      }
                    }
                  }
                }
              }
            }
            str3 = str5;
          }
          str2 = str3;
        }
      }
      return str2;
    },
    ky: fn,
    lag(arg0, arg1) {
      const str = String(arg0);
      const first = str.split(".")[0];
      let str2 = "other";
      if (!arg1) {
        let str3 = "zero";
        if (0 != arg0) {
          if (0 == first) {
            let str4 = "one";
            str3 = str4;
          }
          str4 = "other";
        }
        str2 = str3;
      }
      return str2;
    },
    lb: fn,
    lg: fn,
    lij(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = parts[1];
      const tmp3 = Number(parts[0]) == arg0;
      const tmp4 = arg1;
      if (tmp4) {
        if (11 != arg0) {
          let str5;
          if (8 != arg0) {
            str5 = "other";
            if (tmp3) {
              str5 = "other";
              if (arg0 >= 800) {
                str5 = "other";
              }
            }
          }
          str3 = str5;
        }
        str5 = "many";
      } else {
        str3 = "other";
        if (1 == arg0) {
          str3 = "other";
          if (!tmp2) {
            str3 = "one";
          }
        }
      }
      return str3;
    },
    lkt: fn5,
    ln: fn2,
    lo(arg0, arg1) {
      let str = "other";
      if (arg1) {
        str = "other";
        if (1 == arg0) {
          str = "one";
        }
      }
      return str;
    },
    lt(arg0, arg1) {
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = parts[1] || "";
      let substr1 = Number(parts[0]) == arg0;
      let substr = substr1;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      let str2 = "other";
      let str3 = "other";
      if (!arg1) {
        let str5;
        if (1 != substr) {
          if (substr >= 2) {
            let str7;
            if (substr <= 9) {
              str7 = "few";
              if (substr1 >= 11) {
                str7 = "few";
              }
            }
            str5 = str7;
          }
          if (0 != tmp2) {
            str2 = "many";
          }
          str7 = str2;
        } else {
          str5 = "one";
          if (substr1 >= 11) {
            str5 = "one";
          }
        }
        str3 = str5;
      }
      return str3;
    },
    lv(arg0, arg1) {
      let str4;
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = Number(parts[0]) == arg0;
      let substr = tmp2;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      let substr1 = tmp2;
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      const substr2 = arr.slice(-2);
      const substr3 = arr.slice(-1);
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (!tmp2) {
          if (substr1 < 11) {
            if (2 == (parts[1] || "").length) {
              if (substr2 >= 11) {
                str3 = "zero";
              }
            }
            if (1 != substr) {
              if (2 == (parts[1] || "").length) {
                if (1 == substr3) {
                  str3 = str4;
                }
              }
              str4 = "other";
              if (2 != (parts[1] || "").length) {
                str4 = "other";
              }
            }
            str4 = "one";
          } else {
            str3 = "zero";
          }
        } else {
          str3 = "zero";
        }
        str2 = str3;
      }
      return str2;
    },
    mas: fn,
    mg: fn2,
    mgo: fn,
    mk(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const arr2 = parts[1] || "";
      const tmp2 = parts[1];
      const substr = first.slice(-1);
      const substr1 = first.slice(-2);
      const substr2 = arr2.slice(-1);
      if (arg1) {
        let str4;
        if (1 != substr) {
          let str5;
          if (2 != substr) {
            if (7 == substr) {
              let str6;
              if (17 != substr1) {
                str6 = "many";
              }
              str5 = str6;
            }
            str6 = "other";
          } else {
            str5 = "two";
          }
          str4 = str5;
        } else {
          str4 = "one";
        }
        str3 = str4;
      } else {
        if (!tmp2) {
          str3 = "one";
        }
        str3 = "other";
        if (1 == substr2) {
          str3 = "other";
        }
      }
      return str3;
    },
    ml: fn,
    mn: fn,
    mo(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const parts = str.split(".");
      let substr = Number(parts[0]) == arg0;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-2);
      }
      if (arg1) {
        let str5 = "other";
        if (1 == arg0) {
          str5 = "one";
        }
        str2 = str5;
      } else if (1 != arg0) {
        if (!parts[1]) {
          let str4;
          if (0 != arg0) {
            str4 = "other";
            if (1 != arg0) {
              str4 = "other";
              if (substr >= 1) {
                str4 = "other";
              }
            }
          }
          str2 = str4;
        }
        str4 = "few";
      } else {
        str2 = "one";
      }
      return str2;
    },
    mr(arg0, arg1) {
      let str;
      const tmp2 = arg1;
      if (tmp2) {
        let str2 = "one";
        if (1 != arg0) {
          let str4 = "two";
          if (2 != arg0) {
            str4 = "two";
            if (3 != arg0) {
              let str5 = "other";
              if (4 == arg0) {
                str5 = "few";
              }
              str4 = str5;
            }
          }
          str2 = str4;
        }
        str = str2;
      } else {
        str = "other";
        if (1 == arg0) {
          str = "one";
        }
      }
      return str;
    },
    ms(arg0, arg1) {
      let str = "other";
      if (arg1) {
        str = "other";
        if (1 == arg0) {
          str = "one";
        }
      }
      return str;
    },
    mt(arg0, arg1) {
      const str = String(arg0);
      const parts = str.split(".");
      let substr = Number(parts[0]) == arg0;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-2);
      }
      let str2 = "other";
      if (!arg1) {
        let str3 = "one";
        if (1 != arg0) {
          let str4 = "two";
          if (2 != arg0) {
            let str6 = "few";
            if (0 != arg0) {
              if (substr < 3) {
                let str7 = "other";
                if (substr >= 11) {
                  str7 = "other";
                  if (substr <= 19) {
                    str7 = "many";
                  }
                }
                str6 = str7;
              } else {
                str6 = "few";
              }
            }
            str4 = str6;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    },
    my: fn5,
    nah: fn,
    naq: fn6,
    nb: fn,
    nd: fn,
    ne(arg0, arg1) {
      let str;
      String(arg0);
      const tmp3 = arg1;
      if (tmp3) {
        let str2 = "other";
        if (tmp2) {
          str2 = "other";
          if (arg0 >= 1) {
            str2 = "other";
            if (arg0 <= 4) {
              str2 = "one";
            }
          }
        }
        str = str2;
      } else {
        str = "other";
        if (1 == arg0) {
          str = "one";
        }
      }
      return str;
    },
    nl: fn4,
    nn: fn,
    nnh: fn,
    no: fn,
    nqo: fn5,
    nr: fn,
    nso: fn2,
    ny: fn,
    nyn: fn,
    om: fn,
    or(arg0, arg1) {
      let str;
      String(arg0);
      const tmp4 = arg1;
      if (tmp4) {
        let str3 = "one";
        if (1 != arg0) {
          str3 = "one";
          if (5 != arg0) {
            if (tmp2) {
              if (arg0 >= 7) {
                str3 = "one";
              }
            }
            let str5 = "two";
            if (2 != arg0) {
              str5 = "two";
              if (3 != arg0) {
                let str6 = "few";
                if (4 != arg0) {
                  let str7 = "other";
                  if (6 == arg0) {
                    str7 = "many";
                  }
                  str6 = str7;
                }
                str5 = str6;
              }
            }
            str3 = str5;
          }
        }
        str = str3;
      } else {
        str = "other";
        if (1 == arg0) {
          str = "one";
        }
      }
      return str;
    },
    os: fn,
    osa: fn5,
    pa: fn2,
    pap: fn,
    pcm: fn3,
    pl(arg0, arg1) {
      let arr;
      let str6;
      let tmp2;
      const str = String(arg0);
      const parts = str.split(".");
      [arr, tmp2] = parts;
      const substr = arr.slice(-1);
      const substr1 = arr.slice(-2);
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (1 != arg0) {
          let str5;
          if (!tmp2) {
            if (substr >= 2) {
              if (substr <= 4) {
                str5 = "few";
                if (substr1 >= 12) {
                  str5 = "few";
                }
              }
              str3 = str5;
            }
          }
          if (!tmp2) {
            if (1 != arr) {
              if (0 != substr) {
                str5 = str6;
              }
            }
            str6 = "many";
          }
          str6 = "other";
          if (!tmp2) {
            str6 = "other";
            if (substr1 >= 12) {
              str6 = "other";
            }
          }
        } else {
          str3 = "one";
        }
        str2 = str3;
      }
      return str2;
    },
    prg(arg0, arg1) {
      let str4;
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = Number(parts[0]) == arg0;
      let substr = tmp2;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      let substr1 = tmp2;
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      const substr2 = arr.slice(-2);
      const substr3 = arr.slice(-1);
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (!tmp2) {
          if (substr1 < 11) {
            if (2 == (parts[1] || "").length) {
              if (substr2 >= 11) {
                str3 = "zero";
              }
            }
            if (1 != substr) {
              if (2 == (parts[1] || "").length) {
                if (1 == substr3) {
                  str3 = str4;
                }
              }
              str4 = "other";
              if (2 != (parts[1] || "").length) {
                str4 = "other";
              }
            }
            str4 = "one";
          } else {
            str3 = "zero";
          }
        } else {
          str3 = "zero";
        }
        str2 = str3;
      }
      return str2;
    },
    ps: fn,
    pt(arg0, arg1) {
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      let str2 = "other";
      if (!arg1) {
        let str4 = "one";
        if (0 != tmp2) {
          str4 = "one";
          if (1 != tmp2) {
            let str5 = "other";
            if (0 != tmp2) {
              str5 = "other";
              if (0 == tmp4) {
                str5 = "other";
                if (!tmp3) {
                  str5 = "many";
                }
              }
            }
            str4 = str5;
          }
        }
        str2 = str4;
      }
      return str2;
    },
    pt_PT(arg0, arg1) {
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (1 != arg0) {
          let str4 = "other";
          if (0 != tmp2) {
            str4 = "other";
            if (0 == tmp4) {
              str4 = "other";
              if (!tmp3) {
                str4 = "many";
              }
            }
          }
          str3 = str4;
        } else {
          str3 = "one";
        }
        str2 = str3;
      }
      return str2;
    },
    rm: fn,
    ro(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const parts = str.split(".");
      let substr = Number(parts[0]) == arg0;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-2);
      }
      if (arg1) {
        let str5 = "other";
        if (1 == arg0) {
          str5 = "one";
        }
        str2 = str5;
      } else if (1 != arg0) {
        if (!parts[1]) {
          let str4;
          if (0 != arg0) {
            str4 = "other";
            if (1 != arg0) {
              str4 = "other";
              if (substr >= 1) {
                str4 = "other";
              }
            }
          }
          str2 = str4;
        }
        str4 = "few";
      } else {
        str2 = "one";
      }
      return str2;
    },
    rof: fn,
    ru(arg0, arg1) {
      let arr;
      let str6;
      let tmp2;
      const str = String(arg0);
      const parts = str.split(".");
      [arr, tmp2] = parts;
      const substr = arr.slice(-1);
      const substr1 = arr.slice(-2);
      let str2 = "other";
      if (!arg1) {
        let str3;
        let str5;
        if (!tmp2) {
          if (1 == substr) {
            str3 = "one";
          }
          str2 = str3;
        }
        if (!tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              str5 = "few";
              if (substr1 >= 12) {
                str5 = "few";
              }
            }
            str3 = str5;
          }
        }
        if (tmp2) {
          if (!tmp2) {
            if (substr >= 5) {
              str5 = str6;
            }
          }
          str6 = "other";
          if (!tmp2) {
            str6 = "other";
            if (substr1 >= 11) {
              str6 = "other";
            }
          }
        }
        str6 = "many";
      }
      return str2;
    },
    rwk: fn,
    sah: fn5,
    saq: fn,
    sat: fn6,
    sc(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const tmp = str.split(".")[1];
      const tmp2 = arg1;
      if (tmp2) {
        if (11 != arg0) {
          if (8 != arg0) {
            let str4;
            if (80 != arg0) {
              str4 = "other";
            }
            str3 = str4;
          }
        }
        str4 = "many";
      } else {
        str3 = "other";
        if (1 == arg0) {
          str3 = "other";
          if (!tmp) {
            str3 = "one";
          }
        }
      }
      return str3;
    },
    scn(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const tmp = str.split(".")[1];
      const tmp2 = arg1;
      if (tmp2) {
        if (11 != arg0) {
          if (8 != arg0) {
            let str4;
            if (80 != arg0) {
              str4 = "other";
            }
            str3 = str4;
          }
        }
        str4 = "many";
      } else {
        str3 = "other";
        if (1 == arg0) {
          str3 = "other";
          if (!tmp) {
            str3 = "one";
          }
        }
      }
      return str3;
    },
    sd: fn,
    sdh: fn,
    se: fn6,
    seh: fn,
    ses: fn5,
    sg: fn5,
    sh(arg0, arg1) {
      let str4;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const substr = first.slice(-1);
      const substr1 = first.slice(-2);
      const substr2 = arr2.slice(-1);
      const substr3 = arr2.slice(-2);
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (!parts[1]) {
          if (1 == substr) {
            str3 = "one";
          }
          str2 = str3;
        }
        if (1 != substr2) {
          if (!parts[1]) {
            if (substr >= 2) {
              if (substr <= 4) {
                if (substr1 >= 12) {
                  str3 = str4;
                }
              }
              str4 = "few";
            }
          }
          str4 = "other";
          if (substr2 >= 2) {
            str4 = "other";
            if (substr2 <= 4) {
              if (substr3 >= 12) {
                str4 = "other";
              }
            }
          }
        } else {
          str3 = "one";
        }
      }
      return str2;
    },
    shi(arg0, arg1) {
      String(arg0);
      let str = "other";
      if (!arg1) {
        let str2;
        if (arg0 < 0) {
          let str3 = "other";
          if (tmp2) {
            str3 = "other";
            if (arg0 >= 2) {
              str3 = "other";
              if (arg0 <= 10) {
                str3 = "few";
              }
            }
          }
          str2 = str3;
        } else {
          str2 = "one";
        }
        str = str2;
      }
      return str;
    },
    si(arg0, arg1) {
      let str2;
      let tmp2;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, str2] = parts;
      let str3 = "other";
      if (!arg1) {
        if (0 != arg0) {
          let str4;
          if (1 != arg0) {
            str4 = "other";
            if (0 == tmp2) {
              str4 = "other";
            }
          }
          str3 = str4;
        }
        str4 = "one";
      }
      return str3;
    },
    sk(arg0, arg1) {
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (1 != arg0) {
          if (tmp2 >= 2) {
            let str4;
            if (tmp2 <= 4) {
              str4 = "few";
            }
            str3 = str4;
          }
          let str5 = "many";
          if (!tmp3) {
            str5 = "other";
          }
          str4 = str5;
        } else {
          str3 = "one";
        }
        str2 = str3;
      }
      return str2;
    },
    sl(arg0, arg1) {
      let arr;
      let tmp2;
      const str = String(arg0);
      const parts = str.split(".");
      [arr, tmp2] = parts;
      const substr = arr.slice(-2);
      let str2 = "other";
      let str3 = "other";
      if (!arg1) {
        let str4;
        if (tmp2) {
          let str5;
          if (tmp2) {
            if (tmp2) {
              str5 = str2;
            }
            str2 = "few";
          } else {
            str5 = "two";
          }
          str4 = str5;
        } else {
          str4 = "one";
        }
        str3 = str4;
      }
      return str3;
    },
    sma: fn6,
    smi: fn6,
    smj: fn6,
    smn: fn6,
    sms: fn6,
    sn: fn,
    so: fn,
    sq(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const parts = str.split(".");
      let substr1 = Number(parts[0]) == arg0;
      let substr = substr1;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      if (arg1) {
        let str3 = "one";
        if (1 != arg0) {
          let str5 = "other";
          if (4 == substr) {
            str5 = "other";
            if (14 != substr1) {
              str5 = "many";
            }
          }
          str3 = str5;
        }
        str2 = str3;
      } else {
        str2 = "other";
        if (1 == arg0) {
          str2 = "one";
        }
      }
      return str2;
    },
    sr(arg0, arg1) {
      let str4;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const substr = first.slice(-1);
      const substr1 = first.slice(-2);
      const substr2 = arr2.slice(-1);
      const substr3 = arr2.slice(-2);
      let str2 = "other";
      if (!arg1) {
        let str3;
        if (!parts[1]) {
          if (1 == substr) {
            str3 = "one";
          }
          str2 = str3;
        }
        if (1 != substr2) {
          if (!parts[1]) {
            if (substr >= 2) {
              if (substr <= 4) {
                if (substr1 >= 12) {
                  str3 = str4;
                }
              }
              str4 = "few";
            }
          }
          str4 = "other";
          if (substr2 >= 2) {
            str4 = "other";
            if (substr2 <= 4) {
              if (substr3 >= 12) {
                str4 = "other";
              }
            }
          }
        } else {
          str3 = "one";
        }
      }
      return str2;
    },
    ss: fn,
    ssy: fn,
    st: fn,
    su: fn5,
    sv(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const parts = str.split(".");
      const tmp2 = parts[1];
      let substr1 = Number(parts[0]) == arg0;
      let substr = substr1;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      if (arg1) {
        if (1 == substr) {
          let str4;
          if (11 != substr1) {
            str4 = "one";
          }
          str3 = str4;
        }
        str4 = "other";
      } else {
        str3 = "other";
        if (1 == arg0) {
          str3 = "other";
          if (!tmp2) {
            str3 = "one";
          }
        }
      }
      return str3;
    },
    sw: fn4,
    syr: fn,
    ta: fn,
    te: fn,
    teo: fn,
    th: fn5,
    ti: fn2,
    tig: fn,
    tk(arg0, arg1) {
      let str2;
      const str = String(arg0);
      const parts = str.split(".");
      let substr = Number(parts[0]) == arg0;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      const tmp3 = arg1;
      if (tmp3) {
        if (6 != substr) {
          let str3;
          if (9 != substr) {
            str3 = "other";
          }
          str2 = str3;
        }
        str3 = "few";
      } else {
        str2 = "other";
        if (1 == arg0) {
          str2 = "one";
        }
      }
      return str2;
    },
    tl(arg0, arg1) {
      let str3;
      const str = String(arg0);
      const parts = str.split(".");
      const first = parts[0];
      const arr2 = parts[1] || "";
      const substr = first.slice(-1);
      const substr1 = arr2.slice(-1);
      if (arg1) {
        let str4 = "other";
        if (1 == arg0) {
          str4 = "one";
        }
        str3 = str4;
      } else {
        if (parts[1]) {
          str3 = "other";
          if (parts[1]) {
            str3 = "other";
            if (4 != substr1) {
              str3 = "other";
              if (6 != substr1) {
                str3 = "other";
              }
            }
          }
        }
        str3 = "one";
      }
      return str3;
    },
    tn: fn,
    to: fn5,
    tpi: fn5,
    tr: fn,
    ts: fn,
    tzm(arg0, arg1) {
      String(arg0);
      let str = "other";
      if (!arg1) {
        if (0 != arg0) {
          let str2;
          if (1 != arg0) {
            str2 = "other";
            if (tmp2) {
              str2 = "other";
              if (arg0 >= 11) {
                str2 = "other";
              }
            }
          }
          str = str2;
        }
        str2 = "one";
      }
      return str;
    },
    ug: fn,
    uk(arg0, arg1) {
      let arr;
      let str2;
      let str6;
      let tmp2;
      const str = String(arg0);
      const parts = str.split(".");
      [arr, tmp2] = parts;
      let substr1 = Number(parts[0]) == arg0;
      let substr = substr1;
      if (substr) {
        const first = parts[0];
        substr = first.slice(-1);
      }
      if (substr1) {
        const first1 = parts[0];
        substr1 = first1.slice(-2);
      }
      const substr2 = arr.slice(-1);
      const substr3 = arr.slice(-2);
      if (arg1) {
        let str8 = "other";
        if (3 == substr) {
          str8 = "other";
          if (13 != substr1) {
            str8 = "few";
          }
        }
        str2 = str8;
      } else {
        let str4;
        if (!tmp2) {
          if (1 == substr2) {
            str2 = "one";
          }
        }
        if (!tmp2) {
          if (substr2 >= 2) {
            if (substr2 <= 4) {
              str4 = "few";
              if (substr3 >= 12) {
                str4 = "few";
              }
            }
            str2 = str4;
          }
        }
        if (tmp2) {
          if (!tmp2) {
            if (substr2 >= 5) {
              str4 = str6;
            }
          }
          str6 = "other";
          if (!tmp2) {
            str6 = "other";
            if (substr3 >= 11) {
              str6 = "other";
            }
          }
        }
        str6 = "many";
      }
      return str2;
    },
    und: fn5,
    ur: fn4,
    uz: fn,
    ve: fn,
    vec(arg0, arg1) {
      let str2;
      let tmp2;
      let tmp3;
      const str = String(arg0);
      const parts = str.split(".");
      [tmp2, tmp3] = parts;
      const tmp5 = arg1;
      if (tmp5) {
        if (11 != arg0) {
          if (8 != arg0) {
            let str5;
            if (80 != arg0) {
              str5 = "other";
            }
            str2 = str5;
          }
        }
        str5 = "many";
      } else if (1 != arg0) {
        let str4 = "other";
        if (0 != tmp2) {
          str4 = "other";
          if (0 == tmp4) {
            str4 = "other";
            if (!tmp3) {
              str4 = "many";
            }
          }
        }
        str2 = str4;
      } else {
        str2 = "one";
      }
      return str2;
    },
    vi(arg0, arg1) {
      let str = "other";
      if (arg1) {
        str = "other";
        if (1 == arg0) {
          str = "one";
        }
      }
      return str;
    },
    vo: fn,
    vun: fn,
    wa: fn2,
    wae: fn,
    wo: fn5,
    xh: fn,
    xog: fn,
    yi: fn4,
    yo: fn5,
    yue: fn5,
    zh: fn5,
    zu: fn3,
  };
  fn = function a(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      if (1 == arg0) {
        str = "one";
      }
      str2 = str;
    }
    return str2;
  };
  fn2 = function b(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      if (0 == arg0) {
        str = "one";
      }
      str2 = str;
    }
    return str2;
  };
  fn3 = function c(arg0, arg1) {
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 <= 1) {
          str2 = "one";
        }
      }
      str = str2;
    }
    return str;
  };
  fn4 = function d(arg0, arg1) {
    let str2 = "other";
    const str = String(arg0);
    const tmp = str.split(".")[1];
    if (!arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!tmp) {
          str3 = "one";
        }
      }
      str2 = str3;
    }
    return str2;
  };
  fn5 = function e(arg0, arg1) {
    return "other";
  };
  fn6 = function f(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      let str3 = "one";
      if (1 != arg0) {
        if (2 == arg0) {
          str = "two";
        }
        str3 = str;
      }
      str2 = str3;
    }
    return str2;
  };
  let _Object = Object;
  let str = "__esModule";
  let _default = obj2;
  if (_default) {
    _default = obj2;
    if (obj2.__esModule) {
      let _Object2 = Object;
      let str9 = "default";
      _default = obj2;
      if (hasOwnProperty.call(obj2, "default")) {
        _default = obj2.default;
      }
    }
  }
  let tmp4 = null;
  const merged = Object.assign({ default: null });
  merged[0] = _default;
  const items = [obj2];
  let item = items.forEach(f116108);
  const _Object3 = Object;
  const obj3 = { cardinal: items1, ordinal: items2 };
  items1 = [,];
  let str2 = "one";
  items1[0] = "one";
  let str3 = "other";
  items1[1] = "other";
  items2 = ["other"];
  const obj4 = { cardinal: items3, ordinal: items4 };
  items3 = ["one", "other"];
  items4 = ["one", "other"];
  const obj5 = { cardinal: items5, ordinal: items6 };
  items5 = ["other"];
  items6 = ["other"];
  const obj6 = { cardinal: items7, ordinal: items8 };
  items7 = ["one", ,];
  let str4 = "two";
  items7[1] = "two";
  items7[2] = "other";
  items8 = ["other"];
  const obj7 = {
    af: obj3,
    ak: obj3,
    am: obj3,
    an: obj3,
    ar: obj8,
    ars: obj9,
    as: obj10,
    asa: obj3,
    ast: obj3,
    az: obj11,
    bal: obj4,
    be: obj12,
    bem: obj3,
    bez: obj3,
    bg: obj3,
    bho: obj3,
    bm: obj5,
    bn: obj13,
    bo: obj5,
    br: obj14,
    brx: obj3,
    bs: obj15,
    ca: obj16,
    ce: obj3,
    ceb: obj3,
    cgg: obj3,
    chr: obj3,
    ckb: obj3,
    cs: obj17,
    cy: obj18,
    da: obj3,
    de: obj3,
    doi: obj3,
    dsb: obj19,
    dv: obj3,
    dz: obj5,
    ee: obj3,
    el: obj3,
    en: obj20,
    eo: obj3,
    es: obj21,
    et: obj3,
    eu: obj3,
    fa: obj3,
    ff: obj3,
    fi: obj3,
    fil: obj4,
    fo: obj3,
    fr: obj22,
    fur: obj3,
    fy: obj3,
    ga: obj23,
    gd: obj24,
    gl: obj3,
    gsw: obj3,
    gu: obj25,
    guw: obj3,
    gv: obj26,
    ha: obj3,
    haw: obj3,
    he: obj6,
    hi: obj27,
    hnj: obj5,
    hr: obj28,
    hsb: obj29,
    hu: obj4,
    hy: obj4,
    ia: obj3,
    id: obj5,
    ig: obj5,
    ii: obj5,
    io: obj3,
    is: obj3,
    it: obj30,
    iu: obj6,
    ja: obj5,
    jbo: obj5,
    jgo: obj3,
    jmc: obj3,
    jv: obj5,
    jw: obj5,
    ka: obj31,
    kab: obj3,
    kaj: obj3,
    kcg: obj3,
    kde: obj5,
    kea: obj5,
    kk: obj32,
    kkj: obj3,
    kl: obj3,
    km: obj5,
    kn: obj3,
    ko: obj5,
    ks: obj3,
    ksb: obj3,
    ksh: obj33,
    ku: obj3,
    kw: obj34,
    ky: obj3,
    lag: obj35,
    lb: obj3,
    lg: obj3,
    lij: obj36,
    lkt: obj5,
    ln: obj3,
    lo: obj37,
    lt: obj38,
    lv: obj39,
    mas: obj3,
    mg: obj3,
    mgo: obj3,
    mk: obj40,
    ml: obj3,
    mn: obj3,
    mo: obj41,
    mr: obj42,
    ms: obj43,
    mt: obj44,
    my: obj5,
    nah: obj3,
    naq: obj6,
    nb: obj3,
    nd: obj3,
    ne: obj4,
    nl: obj3,
    nn: obj3,
    nnh: obj3,
    no: obj3,
    nqo: obj5,
    nr: obj3,
    nso: obj3,
    ny: obj3,
    nyn: obj3,
    om: obj3,
    or: obj45,
    os: obj3,
    osa: obj5,
    pa: obj3,
    pap: obj3,
    pcm: obj3,
    pl: obj46,
    prg: obj47,
    ps: obj3,
    pt: obj48,
    pt_PT: obj49,
    rm: obj3,
    ro: obj50,
    rof: obj3,
    ru: obj51,
    rwk: obj3,
    sah: obj5,
    saq: obj3,
    sat: obj6,
    sc: obj52,
    scn: obj53,
    sd: obj3,
    sdh: obj3,
    se: obj6,
    seh: obj3,
    ses: obj5,
    sg: obj5,
    sh: obj54,
    shi: obj55,
    si: obj3,
    sk: obj56,
    sl: obj57,
    sma: obj6,
    smi: obj6,
    smj: obj6,
    smn: obj6,
    sms: obj6,
    sn: obj3,
    so: obj3,
    sq: obj58,
    sr: obj59,
    ss: obj3,
    ssy: obj3,
    st: obj3,
    su: obj5,
    sv: obj4,
    sw: obj3,
    syr: obj3,
    ta: obj3,
    te: obj3,
    teo: obj3,
    th: obj5,
    ti: obj3,
    tig: obj3,
    tk: obj60,
    tl: obj4,
    tn: obj3,
    to: obj5,
    tpi: obj5,
    tr: obj3,
    ts: obj3,
    tzm: obj3,
    ug: obj3,
    uk: obj61,
    und: obj5,
    ur: obj3,
    uz: obj3,
    ve: obj3,
    vec: obj62,
    vi: obj63,
    vo: obj3,
    vun: obj3,
    wa: obj3,
    wae: obj3,
    wo: obj5,
    xh: obj3,
    xog: obj3,
    yi: obj3,
    yo: obj5,
    yue: obj5,
    zh: obj5,
    zu: obj3,
  };
  obj8 = { cardinal: items9, ordinal: items10 };
  items9 = [, , , , ,];
  let str5 = "zero";
  items9[0] = "zero";
  items9[1] = "one";
  items9[2] = "two";
  let str6 = "few";
  items9[3] = "few";
  let str7 = "many";
  items9[4] = "many";
  items9[5] = "other";
  items10 = ["other"];
  obj9 = { cardinal: items11, ordinal: items12 };
  items11 = ["zero", "one", "two", "few", "many", "other"];
  items12 = ["other"];
  obj10 = { cardinal: items13, ordinal: items14 };
  items13 = ["one", "other"];
  items14 = ["one", "two", "few", "many", "other"];
  obj11 = { cardinal: items15, ordinal: items16 };
  items15 = ["one", "other"];
  items16 = ["one", "few", "many", "other"];
  obj12 = { cardinal: items17, ordinal: items18 };
  items17 = ["one", "few", "many", "other"];
  items18 = ["few", "other"];
  obj13 = { cardinal: items19, ordinal: items20 };
  items19 = ["one", "other"];
  items20 = ["one", "two", "few", "many", "other"];
  obj14 = { cardinal: items21, ordinal: items22 };
  items21 = ["one", "two", "few", "many", "other"];
  items22 = ["other"];
  obj15 = { cardinal: items23, ordinal: items24 };
  items23 = ["one", "few", "other"];
  items24 = ["other"];
  obj16 = { cardinal: items25, ordinal: items26 };
  items25 = ["one", "many", "other"];
  items26 = ["one", "two", "few", "other"];
  obj17 = { cardinal: items27, ordinal: items28 };
  items27 = ["one", "few", "many", "other"];
  items28 = ["other"];
  obj18 = { cardinal: items29, ordinal: items30 };
  items29 = ["zero", "one", "two", "few", "many", "other"];
  items30 = ["zero", "one", "two", "few", "many", "other"];
  obj19 = { cardinal: items31, ordinal: items32 };
  items31 = ["one", "two", "few", "other"];
  items32 = ["other"];
  obj20 = { cardinal: items33, ordinal: items34 };
  items33 = ["one", "other"];
  items34 = ["one", "two", "few", "other"];
  obj21 = { cardinal: items35, ordinal: items36 };
  items35 = ["one", "many", "other"];
  items36 = ["other"];
  obj22 = { cardinal: items37, ordinal: items38 };
  items37 = ["one", "many", "other"];
  items38 = ["one", "other"];
  obj23 = { cardinal: items39, ordinal: items40 };
  items39 = ["one", "two", "few", "many", "other"];
  items40 = ["one", "other"];
  obj24 = { cardinal: items41, ordinal: items42 };
  items41 = ["one", "two", "few", "other"];
  items42 = ["one", "two", "few", "other"];
  obj25 = { cardinal: items43, ordinal: items44 };
  items43 = ["one", "other"];
  items44 = ["one", "two", "few", "many", "other"];
  obj26 = { cardinal: items45, ordinal: items46 };
  items45 = ["one", "two", "few", "many", "other"];
  items46 = ["other"];
  obj27 = { cardinal: items47, ordinal: items48 };
  items47 = ["one", "other"];
  items48 = ["one", "two", "few", "many", "other"];
  obj28 = { cardinal: items49, ordinal: items50 };
  items49 = ["one", "few", "other"];
  items50 = ["other"];
  obj29 = { cardinal: items51, ordinal: items52 };
  items51 = ["one", "two", "few", "other"];
  items52 = ["other"];
  obj30 = { cardinal: items53, ordinal: items54 };
  items53 = ["one", "many", "other"];
  items54 = ["many", "other"];
  obj31 = { cardinal: items55, ordinal: items56 };
  items55 = ["one", "other"];
  items56 = ["one", "many", "other"];
  obj32 = { cardinal: items57, ordinal: items58 };
  items57 = ["one", "other"];
  items58 = ["many", "other"];
  obj33 = { cardinal: items59, ordinal: items60 };
  items59 = ["zero", "one", "other"];
  items60 = ["other"];
  obj34 = { cardinal: items61, ordinal: items62 };
  items61 = ["zero", "one", "two", "few", "many", "other"];
  items62 = ["one", "many", "other"];
  obj35 = { cardinal: items63, ordinal: items64 };
  items63 = ["zero", "one", "other"];
  items64 = ["other"];
  obj36 = { cardinal: items65, ordinal: items66 };
  items65 = ["one", "other"];
  items66 = ["many", "other"];
  obj37 = { cardinal: items67, ordinal: items68 };
  items67 = ["other"];
  items68 = ["one", "other"];
  obj38 = { cardinal: items69, ordinal: items70 };
  items69 = ["one", "few", "many", "other"];
  items70 = ["other"];
  obj39 = { cardinal: items71, ordinal: items72 };
  items71 = ["zero", "one", "other"];
  items72 = ["other"];
  obj40 = { cardinal: items73, ordinal: items74 };
  items73 = ["one", "other"];
  items74 = ["one", "two", "many", "other"];
  obj41 = { cardinal: items75, ordinal: items76 };
  items75 = ["one", "few", "other"];
  items76 = ["one", "other"];
  obj42 = { cardinal: items77, ordinal: items78 };
  items77 = ["one", "other"];
  items78 = ["one", "two", "few", "other"];
  obj43 = { cardinal: items79, ordinal: items80 };
  items79 = ["other"];
  items80 = ["one", "other"];
  obj44 = { cardinal: items81, ordinal: items82 };
  items81 = ["one", "two", "few", "many", "other"];
  items82 = ["other"];
  obj45 = { cardinal: items83, ordinal: items84 };
  items83 = ["one", "other"];
  items84 = ["one", "two", "few", "many", "other"];
  obj46 = { cardinal: items85, ordinal: items86 };
  items85 = ["one", "few", "many", "other"];
  items86 = ["other"];
  obj47 = { cardinal: items87, ordinal: items88 };
  items87 = ["zero", "one", "other"];
  items88 = ["other"];
  obj48 = { cardinal: items89, ordinal: items90 };
  items89 = ["one", "many", "other"];
  items90 = ["other"];
  obj49 = { cardinal: items91, ordinal: items92 };
  items91 = ["one", "many", "other"];
  items92 = ["other"];
  obj50 = { cardinal: items93, ordinal: items94 };
  items93 = ["one", "few", "other"];
  items94 = ["one", "other"];
  obj51 = { cardinal: items95, ordinal: items96 };
  items95 = ["one", "few", "many", "other"];
  items96 = ["other"];
  obj52 = { cardinal: items97, ordinal: items98 };
  items97 = ["one", "other"];
  items98 = ["many", "other"];
  obj53 = { cardinal: items99, ordinal: items100 };
  items99 = ["one", "other"];
  items100 = ["many", "other"];
  obj54 = { cardinal: items101, ordinal: items102 };
  items101 = ["one", "few", "other"];
  items102 = ["other"];
  obj55 = { cardinal: items103, ordinal: items104 };
  items103 = ["one", "few", "other"];
  items104 = ["other"];
  obj56 = { cardinal: items105, ordinal: items106 };
  items105 = ["one", "few", "many", "other"];
  items106 = ["other"];
  obj57 = { cardinal: items107, ordinal: items108 };
  items107 = ["one", "two", "few", "other"];
  items108 = ["other"];
  obj58 = { cardinal: items109, ordinal: items110 };
  items109 = ["one", "other"];
  items110 = ["one", "many", "other"];
  obj59 = { cardinal: items111, ordinal: items112 };
  items111 = ["one", "few", "other"];
  items112 = ["other"];
  obj60 = { cardinal: items113, ordinal: items114 };
  items113 = ["one", "other"];
  items114 = ["few", "other"];
  obj61 = { cardinal: items115, ordinal: items116 };
  items115 = ["one", "few", "many", "other"];
  items116 = ["few", "other"];
  obj62 = { cardinal: items117, ordinal: items118 };
  items117 = ["one", "many", "other"];
  items118 = ["many", "other"];
  obj63 = { cardinal: items119, ordinal: items120 };
  items119 = ["other"];
  items120 = ["one", "other"];
  const _Object4 = Object;
  const frozen = Object.freeze(merged);
  let _default2 = obj7;
  if (_default2) {
    _default2 = obj7;
    if (obj7.__esModule) {
      const _Object5 = Object;
      const hasOwnProperty2 = Object.prototype.hasOwnProperty;
      let str10 = "default";
      _default2 = obj7;
      if (hasOwnProperty2.call(obj7, "default")) {
        _default2 = obj7.default;
      }
    }
  }
  const merged1 = Object.assign({ default: null });
  merged1[0] = _default2;
  const items121 = [obj7];
  const item1 = items121.forEach(f116108);
  const _Object6 = Object;
  const fn7 = function a(arg0, arg1) {
    return "other";
  };
  const fn8 = function b(arg0, arg1) {
    let str = "other";
    if ("other" === arg0) {
      str = "other";
      if ("one" === arg1) {
        str = "one";
      }
    }
    return str;
  };
  const fn9 = function c(arg0, arg1) {
    return arg1 || "other";
  };
  const obj64 = {
    af: fn7,
    ak: fn8,
    am: fn9,
    an: fn7,
    ar(arg0, arg1) {
      let str = "few";
      if ("few" !== arg1) {
        let str2 = "many";
        if ("many" !== arg1) {
          if ("zero" !== arg0) {
            let str6 = "other";
            if ("zero" === arg0) {
              str6 = "other";
            }
            str2 = str6;
          }
          str6 = "zero";
        }
        str = str2;
      }
      return str;
    },
    as: fn9,
    az: fn9,
    be: fn9,
    bg: fn7,
    bn: fn9,
    bs: fn9,
    ca: fn7,
    cs: fn9,
    cy: fn9,
    da: fn9,
    de: fn9,
    el: fn9,
    en: fn7,
    es: fn7,
    et: fn7,
    eu: fn7,
    fa: fn8,
    fi: fn7,
    fil: fn9,
    fr: fn9,
    ga: fn9,
    gl: fn9,
    gsw: fn9,
    gu: fn9,
    he: fn7,
    hi: fn9,
    hr: fn9,
    hu: fn9,
    hy: fn9,
    ia: fn7,
    id: fn7,
    io: fn7,
    is: fn9,
    it: fn9,
    ja: fn7,
    ka(arg0, arg1) {
      return arg0 || "other";
    },
    kk: fn9,
    km: fn7,
    kn: fn9,
    ko: fn7,
    ky: fn9,
    lij: fn9,
    lo: fn7,
    lt: fn9,
    lv(arg0, arg1) {
      let str = "other";
      if ("one" === arg1) {
        str = "one";
      }
      return str;
    },
    mk: fn7,
    ml: fn9,
    mn: fn9,
    mr: fn9,
    ms: fn7,
    my: fn7,
    nb: fn7,
    ne: fn9,
    nl: fn9,
    no: fn7,
    or: fn8,
    pa: fn9,
    pcm: fn7,
    pl: fn9,
    ps: fn9,
    pt: fn9,
    ro(arg0, arg1) {
      let str;
      if ("few" === arg1) {
        str = "few";
      } else {
        str = "other";
      }
      return str;
    },
    ru: fn9,
    sc: fn9,
    scn: fn9,
    sd: fn8,
    si(arg0, arg1) {
      let str = "other";
      if ("one" === arg0) {
        str = "other";
        if ("one" === arg1) {
          str = "one";
        }
      }
      return str;
    },
    sk: fn9,
    sl(arg0, arg1) {
      let str = "few";
      if ("few" !== arg1) {
        str = "few";
        if ("one" !== arg1) {
          let str3 = "other";
          if ("two" === arg1) {
            str3 = "two";
          }
          str = str3;
        }
      }
      return str;
    },
    sq: fn9,
    sr: fn9,
    sv: fn7,
    sw: fn9,
    ta: fn9,
    te: fn9,
    th: fn7,
    tk: fn9,
    tr: fn9,
    ug: fn9,
    uk: fn9,
    ur: fn7,
    uz: fn9,
    vi: fn7,
    yue: fn7,
    zh: fn7,
    zu: fn9,
  };
  const _Object7 = Object;
  const frozen1 = Object.freeze(merged1);
  let _default3 = obj64;
  if (obj64.__esModule) {
    const _Object8 = Object;
    const hasOwnProperty3 = Object.prototype.hasOwnProperty;
    let str11 = "default";
    _default3 = obj64;
    if (hasOwnProperty3.call(obj64, "default")) {
      _default3 = obj64.default;
    }
  }
  if (!_default) {
    _default = frozen;
  }
  if (!_default2) {
    _default2 = frozen1;
  }
  let frozen2 = _default3;
  if (!frozen2) {
    const merged2 = Object.assign({ default: null });
    merged2[0] = _default3;
    const items122 = [obj64];
    const item2 = items122.forEach(f116108);
    const _Object9 = Object;
    frozen2 = Object.freeze(merged2);
  }
  function id(arg0) {}
  const _Intl = Intl;
  module.exports = obj.default(
    Intl.NumberFormat,
    function getSelector(arg0) {
      if (typeof id === "function") {
        let str = "pt_PT";
        if ("pt-PT" !== arg0) {
          str = arg0;
        }
        return tmp[str];
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    function getCategories(arg0, arg1) {
      if (typeof id === "function") {
        let str = "pt_PT";
        if ("pt-PT" !== arg0) {
          str = arg0;
        }
        let str3 = "cardinal";
        const tmp4 = tmp[str];
        if (arg1) {
          str3 = "ordinal";
        }
        return tmp4[str3];
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    function getRangeSelector(arg0) {
      if (typeof id === "function") {
        let str = "pt_PT";
        if ("pt-PT" !== arg0) {
          str = arg0;
        }
        return tmp[str];
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
  );
}
obj = { default: getPluralRules };
