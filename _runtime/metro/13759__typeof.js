// === Module 13759: _typeof ===

// Module 13759 (_typeof)
import _typeof from "_typeof" /* 13760 */;

if (_typeof) {
  if (typeof _typeof === "object") {
    let obj = _typeof;
  }
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
  obj = { af: null, ak: null, am: null, an: null, ar: null, ars: null, as: null, asa: null, ast: null, az: null, bal: null, be: null, bem: null, bez: null, bg: null, bho: null, bm: null, bn: null, bo: null, br: null, brx: null, bs: null, ca: null, ce: null, ceb: null, cgg: null, chr: null, ckb: null, cs: null, cy: null, da: null, de: null, doi: null, dsb: null, dv: null, dz: null, ee: null, el: null, en: null, eo: null, es: null, et: null, eu: null, fa: null, ff: null, fi: null, fil: null, fo: null, fr: null, fur: null, fy: null, ga: null, gd: null, gl: null, gsw: null, gu: null, guw: null, gv: null, ha: null, haw: null, he: null, hi: null, hnj: null, hr: null, hsb: null, hu: null, hy: null, ia: null, id: null, ig: null, ii: null, io: null, is: null, it: null, iu: null, ja: null, jbo: null, jgo: null, jmc: null, jv: null, jw: null, ka: null, kab: null, kaj: null, kcg: null, kde: null, kea: null, kk: null, kkj: null, kl: null, km: null, kn: null, ko: null, ks: null, ksb: null, ksh: null, ku: null, kw: null, ky: null, lag: null, lb: null, lg: null, lij: null, lkt: null, ln: null, lo: null, lt: null, lv: null, mas: null, mg: null, mgo: null, mk: null, ml: null, mn: null, mo: null, mr: null, ms: null, mt: null, my: null, nah: null, naq: null, nb: null, nd: null, ne: null, nl: null, nn: null, nnh: null, no: null, nqo: null, nr: null, nso: null, ny: null, nyn: null, om: null, or: null, os: null, osa: null, pa: null, pap: null, pcm: null, pl: null, prg: null, ps: null, pt: null, pt_PT: null, rm: null, ro: null, rof: null, ru: null, rwk: null, sah: null, saq: null, sat: null, sc: null, scn: null, sd: null, sdh: null, se: null, seh: null, ses: null, sg: null, sh: null, shi: null, si: null, sk: null, sl: null, sma: null, smi: null, smj: null, smn: null, sms: null, sn: null, so: null, sq: null, sr: null, ss: null, ssy: null, st: null, su: null, sv: null, sw: null, syr: null, ta: null, te: null, teo: null, th: null, ti: null, tig: null, tk: null, tl: null, tn: null, to: null, tpi: null, tr: null, ts: null, tzm: null, ug: null, uk: null, und: null, ur: null, uz: null, ve: null, vec: null, vi: null, vo: null, vun: null, wa: null, wae: null, wo: null, xh: null, xog: null, yi: null, yo: null, yue: null, zh: null, zu: null };
  const fn = function a(arg0, arg1) {
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
  obj[0] = fn;
  const fn2 = function b(arg0, arg1) {
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
  obj[1] = fn2;
  const fn3 = function c(arg0, arg1) {
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
  obj[2] = fn3;
  obj[3] = fn;
  obj[4] = function ar(arg0, arg1) {
    const parts = String(arg0).split(".");
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
            if (substr < 3) {
              let str7 = "other";
              if (substr >= 11) {
                str7 = "other";
                if (substr <= 99) {
                  str7 = "many";
                }
              }
              let str6 = str7;
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
  };
  obj[5] = function ars(arg0, arg1) {
    const parts = String(arg0).split(".");
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
            if (substr < 3) {
              let str7 = "other";
              if (substr >= 11) {
                str7 = "other";
                if (substr <= 99) {
                  str7 = "many";
                }
              }
              let str6 = str7;
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
  };
  obj[6] = function as(arg0, arg1) {
    if (arg1) {
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
      let str2 = str4;
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
  };
  obj[7] = fn;
  const fn4 = function d(arg0, arg1) {
    let str2 = "other";
    if (!arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!str.split(".")[1]) {
          str3 = "one";
        }
      }
      str2 = str3;
    }
    return str2;
  };
  obj[8] = fn4;
  obj[9] = function az(arg0, arg1) {
    const first = String(arg0).split(".")[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = first.slice(-3);
    if (arg1) {
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
                                                    if (60 != substr1) {
                                                      let str7 = "other";
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
      let str2 = str4;
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj[10] = function bal(arg0, arg1) {
    let str = "other";
    if (1 == arg0) {
      str = "one";
    }
    return str;
  };
  obj[11] = function be(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (2 == substr) {
        if (12 != substr1) {
          let str7 = "few";
        }
        let str2 = str7;
      }
      str7 = "other";
    } else if (1 != substr) {
      if (substr >= 2) {
        if (substr <= 4) {
          let str4 = "few";
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
  };
  obj[12] = fn;
  obj[13] = fn;
  obj[14] = fn;
  obj[15] = fn2;
  const fn5 = function e(arg0, arg1) {
    return "other";
  };
  obj[16] = fn5;
  obj[17] = function bn(arg0, arg1) {
    if (arg1) {
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
      let str2 = str4;
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
  };
  obj[18] = fn5;
  obj[19] = function br(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    let substr2 = tmp2;
    if (tmp2) {
      const first2 = parts[0];
      substr2 = first2.slice(-6);
    }
    let str2 = "other";
    if (!arg1) {
      if (1 == substr) {
        if (11 != substr1) {
          if (71 != substr1) {
            let str3 = "one";
          }
          str2 = str3;
        }
      }
      if (2 == substr) {
        if (12 != substr1) {
          if (72 != substr1) {
            let str4 = "two";
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
        let str6 = str7;
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
  };
  obj[20] = fn;
  obj[21] = function bs(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (!tmp2) {
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
  };
  obj[22] = function ca(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    if (arg1) {
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
      let str2 = str6;
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
  };
  obj[23] = fn;
  obj[24] = function ceb(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = parts[1] || "".slice(-1);
    let str2 = "other";
    if (!arg1) {
      if (tmp2) {
        if (!tmp2) {
          if (4 != substr) {
            if (6 != substr) {
              str2 = str3;
            }
          }
        }
        str3 = "other";
        if (tmp2) {
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
  };
  obj[25] = fn;
  obj[26] = fn;
  obj[27] = fn;
  obj[28] = function cs(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        if (tmp2 >= 2) {
          if (tmp2 <= 4) {
            let str4 = "few";
          }
          let str3 = str4;
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
  };
  obj[29] = function cy(arg0, arg1) {
    if (arg1) {
      let str6 = "zero";
      if (!tmp) {
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
                      if (5 == arg0) {
                        let str11 = "many";
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
      let str = str6;
    } else {
      str = "zero";
      if (!tmp) {
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
  };
  obj[30] = function da(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    if (arg1) {
      let str3 = "other";
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
  };
  obj[31] = fn4;
  obj[32] = fn3;
  obj[33] = function dsb(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-2);
    const substr1 = parts[1] || "".slice(-2);
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      if (tmp2) {
        let str4 = "one";
        if (1 != substr1) {
          if (tmp2) {
            let str5 = "two";
            if (2 != substr1) {
              if (tmp2) {
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
  };
  obj[34] = fn;
  obj[35] = fn5;
  obj[36] = fn;
  obj[37] = fn;
  obj[38] = function en(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (1 != substr) {
        if (2 != substr) {
          let str7 = "other";
          if (3 == substr) {
            str7 = "other";
            if (13 != substr1) {
              str7 = "few";
            }
          }
          let str5 = str7;
        } else {
          str5 = "two";
        }
        let str4 = str5;
      } else {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!parts[1]) {
          str3 = "one";
        }
      }
    }
    return str3;
  };
  obj[39] = fn;
  obj[40] = function es(arg0, arg1) {
    const parts = String(arg0).split(".");
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
  };
  obj[41] = fn4;
  obj[42] = fn;
  obj[43] = fn3;
  obj[44] = function ff(arg0, arg1) {
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
  };
  obj[45] = fn4;
  obj[46] = function fil(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = parts[1] || "".slice(-1);
    if (arg1) {
      let str4 = "other";
      if (1 == arg0) {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      if (tmp2) {
        str3 = "other";
        if (tmp2) {
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
  };
  obj[47] = fn;
  obj[48] = function fr(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    if (arg1) {
      let str5 = "other";
      if (1 == arg0) {
        str5 = "one";
      }
      let str2 = str5;
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
  };
  obj[49] = fn;
  obj[50] = fn4;
  obj[51] = function ga(arg0, arg1) {
    const tmp = Number(String(arg0).split(".")[0]) == arg0;
    if (arg1) {
      let str7 = "other";
      if (tmp2) {
        str7 = "one";
      }
      let str2 = str7;
    } else {
      str2 = "one";
      if (!tmp2) {
        let str3 = "two";
        if (2 != arg0) {
          if (tmp) {
            if (arg0 >= 3) {
              let str4 = "few";
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
  };
  obj[52] = function gd(arg0, arg1) {
    const tmp = Number(String(arg0).split(".")[0]) == arg0;
    if (arg1) {
      let str7 = "one";
      if (!tmp2) {
        str7 = "one";
        if (11 != arg0) {
          let str9 = "two";
          if (2 != arg0) {
            str9 = "two";
            if (12 != arg0) {
              if (3 == arg0) {
                let str10 = "few";
              } else {
                str10 = "other";
              }
              str9 = str10;
            }
          }
          str7 = str9;
        }
      }
      let str2 = str7;
    } else {
      str2 = "one";
      if (!tmp2) {
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
  };
  obj[53] = fn4;
  obj[54] = fn;
  obj[55] = function gu(arg0, arg1) {
    if (arg1) {
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
      let str2 = str3;
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
  };
  obj[56] = fn2;
  obj[57] = function gv(arg0, arg1) {
    const parts = String(arg0).split(".");
    [arr, tmp2] = parts;
    const substr = arr.slice(-1);
    const substr1 = arr.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (tmp2) {
        if (tmp2) {
          if (tmp2) {
            let str7 = "many";
            if (!tmp2) {
              str7 = "other";
            }
            let str6 = str7;
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
          let str4 = str6;
        } else {
          str4 = "two";
        }
        let str3 = str4;
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj[58] = fn;
  obj[59] = fn;
  obj[60] = function he(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    let str2 = "other";
    if (!arg1) {
      if (1 != tmp2) {
        if (0 != tmp2) {
          let str4 = "other";
          if (2 == tmp2) {
            str4 = "other";
            if (!tmp3) {
              str4 = "two";
            }
          }
          let str3 = str4;
        } else {
          str3 = "one";
        }
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj[61] = function hi(arg0, arg1) {
    if (arg1) {
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
      let str2 = str3;
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
  };
  obj[62] = fn5;
  obj[63] = function hr(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (!tmp2) {
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
  };
  obj[64] = function hsb(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-2);
    const substr1 = parts[1] || "".slice(-2);
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      if (tmp2) {
        let str4 = "one";
        if (1 != substr1) {
          if (tmp2) {
            let str5 = "two";
            if (2 != substr1) {
              if (tmp2) {
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
  };
  obj[65] = function hu(arg0, arg1) {
    if (arg1) {
      if (1 == arg0) {
        let str2 = "one";
      } else {
        str2 = "other";
      }
      let str = str2;
    } else {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj[66] = function hy(arg0, arg1) {
    if (arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "one";
      }
      let str2 = str3;
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
  };
  obj[67] = fn4;
  obj[68] = fn5;
  obj[69] = fn5;
  obj[70] = fn5;
  obj[71] = fn4;
  obj[72] = function is(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const replaced = parts[1] || "".replace(/0+$/, "");
    const str = String(arg0);
    const str2 = parts[1] || "";
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
  };
  obj[73] = function it(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str5 = "other";
          }
          let str2 = str5;
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
  };
  const fn6 = function f(arg0, arg1) {
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
  obj[74] = fn6;
  obj[75] = fn5;
  obj[76] = fn5;
  obj[77] = fn;
  obj[78] = fn;
  obj[79] = fn5;
  obj[80] = fn5;
  obj[81] = function ka(arg0, arg1) {
    const first = String(arg0).split(".")[0];
    const substr = first.slice(-2);
    if (arg1) {
      let str3 = "one";
      if (1 != first) {
        if (0 != first) {
          if (substr < 2) {
            if (40 != substr) {
              if (60 != substr) {
                let str4 = "other";
              }
              str3 = str4;
            }
          }
        }
        str4 = "many";
      }
      let str2 = str3;
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj[82] = function kab(arg0, arg1) {
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
  };
  obj[83] = fn;
  obj[84] = fn;
  obj[85] = fn5;
  obj[86] = fn5;
  obj[87] = function kk(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (arg1) {
      if (6 != substr) {
        if (9 != substr) {
          let str4 = "other";
          if (tmp2) {
            str4 = "other";
            if (0 == substr) {
              str4 = "other";
            }
          }
        }
        let str2 = str4;
      }
      str4 = "many";
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj[88] = fn;
  obj[89] = fn;
  obj[90] = fn5;
  obj[91] = fn3;
  obj[92] = fn5;
  obj[93] = fn;
  obj[94] = fn;
  obj[95] = function ksh(arg0, arg1) {
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
  };
  obj[96] = fn;
  obj[97] = function kw(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-2);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-3);
    }
    let substr2 = tmp2;
    if (tmp2) {
      const first2 = parts[0];
      substr2 = first2.slice(-5);
    }
    let substr3 = tmp2;
    if (tmp2) {
      const first3 = parts[0];
      substr3 = first3.slice(-6);
    }
    if (arg1) {
      if (tmp2) {
        if (arg0 >= 1) {
          let str10 = "one";
        }
        let str2 = str10;
      }
      if (substr < 1) {
        if (substr < 21) {
          if (substr < 41) {
            if (substr < 61) {
              if (substr < 81) {
                if (5 == arg0) {
                  let str11 = "many";
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
                                if (1 == arg0) {
                                  let str9 = "other";
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
  };
  obj[98] = fn;
  obj[99] = function lag(arg0, arg1) {
    const first = String(arg0).split(".")[0];
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
  };
  obj[100] = fn;
  obj[101] = fn;
  obj[102] = function lij(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          let str5 = "other";
          if (tmp2) {
            str5 = "other";
            if (arg0 >= 800) {
              str5 = "other";
            }
          }
        }
        let str3 = str5;
      }
      str5 = "many";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!parts[1]) {
          str3 = "one";
        }
      }
    }
    return str3;
  };
  obj[103] = fn5;
  obj[104] = fn2;
  obj[105] = function lo(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj[106] = function lt(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
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
      if (1 != substr) {
        if (substr >= 2) {
          if (substr <= 9) {
            let str7 = "few";
            if (substr1 >= 11) {
              str7 = "few";
            }
          }
          let str5 = str7;
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
  };
  obj[107] = function lv(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    const substr2 = arr.slice(-2);
    const substr3 = arr.slice(-1);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (substr1 < 11) {
          if (2 == length) {
            if (substr2 >= 11) {
              let str3 = "zero";
            }
          }
          if (1 != substr) {
            if (2 == length) {
              if (1 == substr3) {
                str3 = str4;
              }
            }
            str4 = "other";
            if (2 != length) {
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
  };
  obj[108] = fn;
  obj[109] = fn2;
  obj[110] = fn;
  obj[111] = function mk(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = parts[1] || "".slice(-1);
    if (arg1) {
      if (1 != substr) {
        if (2 != substr) {
          if (7 == substr) {
            if (17 != substr1) {
              let str6 = "many";
            }
            let str5 = str6;
          }
          str6 = "other";
        } else {
          str5 = "two";
        }
        let str4 = str5;
      } else {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      if (!parts[1]) {
        str3 = "one";
      }
      str3 = "other";
      if (1 == substr2) {
        str3 = "other";
      }
    }
    return str3;
  };
  obj[112] = fn;
  obj[113] = fn;
  obj[114] = function mo(arg0, arg1) {
    const parts = String(arg0).split(".");
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
      let str2 = str5;
    } else if (1 != arg0) {
      if (!tmp2) {
        if (0 != arg0) {
          let str4 = "other";
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
  };
  obj[115] = function mr(arg0, arg1) {
    if (arg1) {
      let str2 = "one";
      if (!tmp) {
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
      let str = str2;
    } else {
      str = "other";
      if (tmp) {
        str = "one";
      }
    }
    return str;
  };
  obj[116] = function ms(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj[117] = function mt(arg0, arg1) {
    const parts = String(arg0).split(".");
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
  };
  obj[118] = fn5;
  obj[119] = fn;
  obj[120] = fn6;
  obj[121] = fn;
  obj[122] = fn;
  obj[123] = function ne(arg0, arg1) {
    String(arg0);
    if (arg1) {
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
      let str = str2;
    } else {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj[124] = fn4;
  obj[125] = fn;
  obj[126] = fn;
  obj[127] = fn;
  obj[128] = fn5;
  obj[129] = fn;
  obj[130] = fn2;
  obj[131] = fn;
  obj[132] = fn;
  obj[133] = fn;
  obj[134] = function or(arg0, arg1) {
    String(arg0);
    if (arg1) {
      let str3 = "one";
      if (!tmp3) {
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
      let str = str3;
    } else {
      str = "other";
      if (tmp3) {
        str = "one";
      }
    }
    return str;
  };
  obj[135] = fn;
  obj[136] = fn5;
  obj[137] = fn2;
  obj[138] = fn;
  obj[139] = fn3;
  obj[140] = function pl(arg0, arg1) {
    const parts = String(arg0).split(".");
    [arr, tmp2] = parts;
    const substr = arr.slice(-1);
    const substr1 = arr.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        if (!tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              let str5 = "few";
              if (substr1 >= 12) {
                str5 = "few";
              }
            }
            let str3 = str5;
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
  };
  obj[141] = function prg(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    const substr2 = arr.slice(-2);
    const substr3 = arr.slice(-1);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (substr1 < 11) {
          if (2 == length) {
            if (substr2 >= 11) {
              let str3 = "zero";
            }
          }
          if (1 != substr) {
            if (2 == length) {
              if (1 == substr3) {
                str3 = str4;
              }
            }
            str4 = "other";
            if (2 != length) {
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
  };
  obj[142] = fn;
  obj[143] = function pt(arg0, arg1) {
    const parts = String(arg0).split(".");
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
  };
  obj[144] = function pt_PT(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    let str2 = "other";
    if (!arg1) {
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
        let str3 = str4;
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj[145] = fn;
  obj[146] = function ro(arg0, arg1) {
    const parts = String(arg0).split(".");
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
      let str2 = str5;
    } else if (1 != arg0) {
      if (!tmp2) {
        if (0 != arg0) {
          let str4 = "other";
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
  };
  obj[147] = fn;
  obj[148] = function ru(arg0, arg1) {
    const parts = String(arg0).split(".");
    [arr, tmp2] = parts;
    const substr = arr.slice(-1);
    const substr1 = arr.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (!tmp2) {
        if (substr >= 2) {
          if (substr <= 4) {
            let str5 = "few";
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
  };
  obj[149] = fn;
  obj[150] = fn5;
  obj[151] = fn;
  obj[152] = fn6;
  obj[153] = function sc(arg0, arg1) {
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str4 = "other";
          }
          let str3 = str4;
        }
      }
      str4 = "many";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!str.split(".")[1]) {
          str3 = "one";
        }
      }
    }
    return str3;
  };
  obj[154] = function scn(arg0, arg1) {
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str4 = "other";
          }
          let str3 = str4;
        }
      }
      str4 = "many";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!str.split(".")[1]) {
          str3 = "one";
        }
      }
    }
    return str3;
  };
  obj[155] = fn;
  obj[156] = fn;
  obj[157] = fn6;
  obj[158] = fn;
  obj[159] = fn5;
  obj[160] = fn5;
  obj[161] = function sh(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (!tmp2) {
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
  };
  obj[162] = function shi(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
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
        let str2 = str3;
      } else {
        str2 = "one";
      }
      str = str2;
    }
    return str;
  };
  obj[163] = function si(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, str2] = parts;
    let str3 = "other";
    if (!arg1) {
      if (0 != arg0) {
        if (1 != arg0) {
          let str4 = "other";
          if (0 == tmp2) {
            str4 = "other";
          }
        }
        str3 = str4;
      }
      str4 = "one";
    }
    return str3;
  };
  obj[164] = function sk(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        if (tmp2 >= 2) {
          if (tmp2 <= 4) {
            let str4 = "few";
          }
          let str3 = str4;
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
  };
  obj[165] = function sl(arg0, arg1) {
    const parts = String(arg0).split(".");
    [arr, tmp2] = parts;
    const substr = arr.slice(-2);
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      if (tmp2) {
        if (tmp2) {
          if (tmp2) {
            let str5 = str2;
          }
          str2 = "few";
        } else {
          str5 = "two";
        }
        let str4 = str5;
      } else {
        str4 = "one";
      }
      str3 = str4;
    }
    return str3;
  };
  obj[166] = fn6;
  obj[167] = fn6;
  obj[168] = fn6;
  obj[169] = fn6;
  obj[170] = fn6;
  obj[171] = fn;
  obj[172] = fn;
  obj[173] = function sq(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      let str3 = "one";
      if (!tmp4) {
        let str5 = "other";
        if (4 == substr) {
          str5 = "other";
          if (14 != substr1) {
            str5 = "many";
          }
        }
        str3 = str5;
      }
      let str2 = str3;
    } else {
      str2 = "other";
      if (tmp4) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj[174] = function sr(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (!tmp2) {
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
  };
  obj[175] = fn;
  obj[176] = fn;
  obj[177] = fn;
  obj[178] = fn5;
  obj[179] = function sv(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (1 == substr) {
        if (11 != substr1) {
          let str4 = "one";
        }
        let str3 = str4;
      }
      str4 = "other";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!parts[1]) {
          str3 = "one";
        }
      }
    }
    return str3;
  };
  obj[180] = fn4;
  obj[181] = fn;
  obj[182] = fn;
  obj[183] = fn;
  obj[184] = fn;
  obj[185] = fn5;
  obj[186] = fn2;
  obj[187] = fn;
  obj[188] = function tk(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr = Number(parts[0]) == arg0;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (arg1) {
      if (6 != substr) {
        if (9 != substr) {
          let str3 = "other";
        }
        let str2 = str3;
      }
      str3 = "few";
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj[189] = function tl(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = parts[1] || "".slice(-1);
    if (arg1) {
      let str4 = "other";
      if (1 == arg0) {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      if (tmp2) {
        str3 = "other";
        if (tmp2) {
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
  };
  obj[190] = fn;
  obj[191] = fn5;
  obj[192] = fn5;
  obj[193] = fn;
  obj[194] = fn;
  obj[195] = function tzm(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      if (0 != arg0) {
        if (1 != arg0) {
          let str2 = "other";
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
  };
  obj[196] = fn;
  obj[197] = function uk(arg0, arg1) {
    const parts = String(arg0).split(".");
    [arr, tmp2] = parts;
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
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
      let str2 = str8;
    } else {
      if (!tmp2) {
        if (1 == substr2) {
          str2 = "one";
        }
      }
      if (!tmp2) {
        if (substr2 >= 2) {
          if (substr2 <= 4) {
            let str4 = "few";
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
  };
  obj[198] = fn5;
  obj[199] = fn4;
  obj[200] = fn;
  obj[201] = fn;
  obj[202] = function vec(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str5 = "other";
          }
          let str2 = str5;
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
  };
  obj[203] = function vi(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj[204] = fn;
  obj[205] = fn;
  obj[206] = fn2;
  obj[207] = fn;
  obj[208] = fn5;
  obj[209] = fn;
  obj[210] = fn;
  obj[211] = fn4;
  obj[212] = fn5;
  obj[213] = fn5;
  obj[214] = fn5;
  obj[215] = fn3;
  let _Object = Object;
  let _default = obj;
  if (obj) {
    _default = obj;
    if (obj.__esModule) {
      const _Object2 = Object;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("default");
      } else {
        hasOwnPropertyResult = call(obj, "default");
      }
      _default = obj;
      if (hasOwnPropertyResult) {
        _default = obj.default;
      }
    }
  }
  obj = Object.create(null);
  obj[0] = _default;
  let items = [obj];
  let obj64 = obj;
  let item = items.forEach((str) => {
    closure_0 = str;
    let tmp = str;
    if (str) {
      tmp = typeof str !== "string";
    }
    if (tmp) {
      const _Array = Array;
      tmp = !Array.isArray(str);
    }
    if (tmp) {
      let _Object = Object;
      const keys = Object.keys(str);
      const item = keys.forEach((arg0) => {
        closure_0 = arg0;
        if ("default" !== arg0) {
          if (!(arg0 in closure_0)) {
            const _Object = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(closure_0, arg0);
            if (!ownPropertyDescriptor.get) {
              const obj = { enumerable: true, get: null };
              obj[1] = function get() {
                return table[table];
              };
              ownPropertyDescriptor = obj;
            }
            Object.defineProperty(tmp, arg0, ownPropertyDescriptor);
          }
        }
      });
    }
  });
  const _Object3 = Object;
  const obj1 = { cardinal: null, ordinal: null };
  const items1 = ["one", "other"];
  obj1[0] = items1;
  const items2 = ["other"];
  obj1[1] = items2;
  const obj2 = { cardinal: null, ordinal: null };
  const items3 = ["one", "other"];
  obj2[0] = items3;
  const items4 = ["one", "other"];
  obj2[1] = items4;
  const obj3 = { cardinal: null, ordinal: null };
  const items5 = ["other"];
  obj3[0] = items5;
  const items6 = ["other"];
  obj3[1] = items6;
  const obj4 = { cardinal: null, ordinal: null };
  const items7 = ["one", "two", "other"];
  obj4[0] = items7;
  const items8 = ["other"];
  obj4[1] = items8;
  const obj5 = { af: null, ak: null, am: null, an: null, ar: null, ars: null, as: null, asa: null, ast: null, az: null, bal: null, be: null, bem: null, bez: null, bg: null, bho: null, bm: null, bn: null, bo: null, br: null, brx: null, bs: null, ca: null, ce: null, ceb: null, cgg: null, chr: null, ckb: null, cs: null, cy: null, da: null, de: null, doi: null, dsb: null, dv: null, dz: null, ee: null, el: null, en: null, eo: null, es: null, et: null, eu: null, fa: null, ff: null, fi: null, fil: null, fo: null, fr: null, fur: null, fy: null, ga: null, gd: null, gl: null, gsw: null, gu: null, guw: null, gv: null, ha: null, haw: null, he: null, hi: null, hnj: null, hr: null, hsb: null, hu: null, hy: null, ia: null, id: null, ig: null, ii: null, io: null, is: null, it: null, iu: null, ja: null, jbo: null, jgo: null, jmc: null, jv: null, jw: null, ka: null, kab: null, kaj: null, kcg: null, kde: null, kea: null, kk: null, kkj: null, kl: null, km: null, kn: null, ko: null, ks: null, ksb: null, ksh: null, ku: null, kw: null, ky: null, lag: null, lb: null, lg: null, lij: null, lkt: null, ln: null, lo: null, lt: null, lv: null, mas: null, mg: null, mgo: null, mk: null, ml: null, mn: null, mo: null, mr: null, ms: null, mt: null, my: null, nah: null, naq: null, nb: null, nd: null, ne: null, nl: null, nn: null, nnh: null, no: null, nqo: null, nr: null, nso: null, ny: null, nyn: null, om: null, or: null, os: null, osa: null, pa: null, pap: null, pcm: null, pl: null, prg: null, ps: null, pt: null, pt_PT: null, rm: null, ro: null, rof: null, ru: null, rwk: null, sah: null, saq: null, sat: null, sc: null, scn: null, sd: null, sdh: null, se: null, seh: null, ses: null, sg: null, sh: null, shi: null, si: null, sk: null, sl: null, sma: null, smi: null, smj: null, smn: null, sms: null, sn: null, so: null, sq: null, sr: null, ss: null, ssy: null, st: null, su: null, sv: null, sw: null, syr: null, ta: null, te: null, teo: null, th: null, ti: null, tig: null, tk: null, tl: null, tn: null, to: null, tpi: null, tr: null, ts: null, tzm: null, ug: null, uk: null, und: null, ur: null, uz: null, ve: null, vec: null, vi: null, vo: null, vun: null, wa: null, wae: null, wo: null, xh: null, xog: null, yi: null, yo: null, yue: null, zh: null, zu: null };
  obj5[0] = obj1;
  obj5[1] = obj1;
  obj5[2] = obj1;
  obj5[3] = obj1;
  const obj6 = { cardinal: null, ordinal: null };
  const items9 = ["zero", "one", "two", "few", "many", "other"];
  obj6[0] = items9;
  const items10 = ["other"];
  obj6[1] = items10;
  obj5[4] = obj6;
  const obj7 = { cardinal: null, ordinal: null };
  const items11 = ["zero", "one", "two", "few", "many", "other"];
  obj7[0] = items11;
  const items12 = ["other"];
  obj7[1] = items12;
  obj5[5] = obj7;
  const obj8 = { cardinal: null, ordinal: null };
  const items13 = ["one", "other"];
  obj8[0] = items13;
  const items14 = ["one", "two", "few", "many", "other"];
  obj8[1] = items14;
  obj5[6] = obj8;
  obj5[7] = obj1;
  obj5[8] = obj1;
  const obj9 = { cardinal: null, ordinal: null };
  const items15 = ["one", "other"];
  obj9[0] = items15;
  const items16 = ["one", "few", "many", "other"];
  obj9[1] = items16;
  obj5[9] = obj9;
  obj5[10] = obj2;
  const obj10 = { cardinal: null, ordinal: null };
  const items17 = ["one", "few", "many", "other"];
  obj10[0] = items17;
  const items18 = ["few", "other"];
  obj10[1] = items18;
  obj5[11] = obj10;
  obj5[12] = obj1;
  obj5[13] = obj1;
  obj5[14] = obj1;
  obj5[15] = obj1;
  obj5[16] = obj3;
  const obj11 = { cardinal: null, ordinal: null };
  const items19 = ["one", "other"];
  obj11[0] = items19;
  const items20 = ["one", "two", "few", "many", "other"];
  obj11[1] = items20;
  obj5[17] = obj11;
  obj5[18] = obj3;
  const obj12 = { cardinal: null, ordinal: null };
  const items21 = ["one", "two", "few", "many", "other"];
  obj12[0] = items21;
  const items22 = ["other"];
  obj12[1] = items22;
  obj5[19] = obj12;
  obj5[20] = obj1;
  const obj13 = { cardinal: null, ordinal: null };
  const items23 = ["one", "few", "other"];
  obj13[0] = items23;
  const items24 = ["other"];
  obj13[1] = items24;
  obj5[21] = obj13;
  const obj14 = { cardinal: null, ordinal: null };
  const items25 = ["one", "many", "other"];
  obj14[0] = items25;
  const items26 = ["one", "two", "few", "other"];
  obj14[1] = items26;
  obj5[22] = obj14;
  obj5[23] = obj1;
  obj5[24] = obj1;
  obj5[25] = obj1;
  obj5[26] = obj1;
  obj5[27] = obj1;
  const obj15 = { cardinal: null, ordinal: null };
  const items27 = ["one", "few", "many", "other"];
  obj15[0] = items27;
  const items28 = ["other"];
  obj15[1] = items28;
  obj5[28] = obj15;
  const obj16 = { cardinal: null, ordinal: null };
  const items29 = ["zero", "one", "two", "few", "many", "other"];
  obj16[0] = items29;
  const items30 = ["zero", "one", "two", "few", "many", "other"];
  obj16[1] = items30;
  obj5[29] = obj16;
  obj5[30] = obj1;
  obj5[31] = obj1;
  obj5[32] = obj1;
  const obj17 = { cardinal: null, ordinal: null };
  const items31 = ["one", "two", "few", "other"];
  obj17[0] = items31;
  const items32 = ["other"];
  obj17[1] = items32;
  obj5[33] = obj17;
  obj5[34] = obj1;
  obj5[35] = obj3;
  obj5[36] = obj1;
  obj5[37] = obj1;
  const obj18 = { cardinal: null, ordinal: null };
  const items33 = ["one", "other"];
  obj18[0] = items33;
  const items34 = ["one", "two", "few", "other"];
  obj18[1] = items34;
  obj5[38] = obj18;
  obj5[39] = obj1;
  const obj19 = { cardinal: null, ordinal: null };
  const items35 = ["one", "many", "other"];
  obj19[0] = items35;
  const items36 = ["other"];
  obj19[1] = items36;
  obj5[40] = obj19;
  obj5[41] = obj1;
  obj5[42] = obj1;
  obj5[43] = obj1;
  obj5[44] = obj1;
  obj5[45] = obj1;
  obj5[46] = obj2;
  obj5[47] = obj1;
  const obj20 = { cardinal: null, ordinal: null };
  const items37 = ["one", "many", "other"];
  obj20[0] = items37;
  const items38 = ["one", "other"];
  obj20[1] = items38;
  obj5[48] = obj20;
  obj5[49] = obj1;
  obj5[50] = obj1;
  const obj21 = { cardinal: null, ordinal: null };
  const items39 = ["one", "two", "few", "many", "other"];
  obj21[0] = items39;
  const items40 = ["one", "other"];
  obj21[1] = items40;
  obj5[51] = obj21;
  const obj22 = { cardinal: null, ordinal: null };
  const items41 = ["one", "two", "few", "other"];
  obj22[0] = items41;
  const items42 = ["one", "two", "few", "other"];
  obj22[1] = items42;
  obj5[52] = obj22;
  obj5[53] = obj1;
  obj5[54] = obj1;
  const obj23 = { cardinal: null, ordinal: null };
  const items43 = ["one", "other"];
  obj23[0] = items43;
  const items44 = ["one", "two", "few", "many", "other"];
  obj23[1] = items44;
  obj5[55] = obj23;
  obj5[56] = obj1;
  const obj24 = { cardinal: null, ordinal: null };
  const items45 = ["one", "two", "few", "many", "other"];
  obj24[0] = items45;
  const items46 = ["other"];
  obj24[1] = items46;
  obj5[57] = obj24;
  obj5[58] = obj1;
  obj5[59] = obj1;
  obj5[60] = obj4;
  const obj25 = { cardinal: null, ordinal: null };
  const items47 = ["one", "other"];
  obj25[0] = items47;
  const items48 = ["one", "two", "few", "many", "other"];
  obj25[1] = items48;
  obj5[61] = obj25;
  obj5[62] = obj3;
  const obj26 = { cardinal: null, ordinal: null };
  const items49 = ["one", "few", "other"];
  obj26[0] = items49;
  const items50 = ["other"];
  obj26[1] = items50;
  obj5[63] = obj26;
  const obj27 = { cardinal: null, ordinal: null };
  const items51 = ["one", "two", "few", "other"];
  obj27[0] = items51;
  const items52 = ["other"];
  obj27[1] = items52;
  obj5[64] = obj27;
  obj5[65] = obj2;
  obj5[66] = obj2;
  obj5[67] = obj1;
  obj5[68] = obj3;
  obj5[69] = obj3;
  obj5[70] = obj3;
  obj5[71] = obj1;
  obj5[72] = obj1;
  const obj28 = { cardinal: null, ordinal: null };
  const items53 = ["one", "many", "other"];
  obj28[0] = items53;
  const items54 = ["many", "other"];
  obj28[1] = items54;
  obj5[73] = obj28;
  obj5[74] = obj4;
  obj5[75] = obj3;
  obj5[76] = obj3;
  obj5[77] = obj1;
  obj5[78] = obj1;
  obj5[79] = obj3;
  obj5[80] = obj3;
  const obj29 = { cardinal: null, ordinal: null };
  const items55 = ["one", "other"];
  obj29[0] = items55;
  const items56 = ["one", "many", "other"];
  obj29[1] = items56;
  obj5[81] = obj29;
  obj5[82] = obj1;
  obj5[83] = obj1;
  obj5[84] = obj1;
  obj5[85] = obj3;
  obj5[86] = obj3;
  const obj30 = { cardinal: null, ordinal: null };
  const items57 = ["one", "other"];
  obj30[0] = items57;
  const items58 = ["many", "other"];
  obj30[1] = items58;
  obj5[87] = obj30;
  obj5[88] = obj1;
  obj5[89] = obj1;
  obj5[90] = obj3;
  obj5[91] = obj1;
  obj5[92] = obj3;
  obj5[93] = obj1;
  obj5[94] = obj1;
  const obj31 = { cardinal: null, ordinal: null };
  const items59 = ["zero", "one", "other"];
  obj31[0] = items59;
  const items60 = ["other"];
  obj31[1] = items60;
  obj5[95] = obj31;
  obj5[96] = obj1;
  const obj32 = { cardinal: null, ordinal: null };
  const items61 = ["zero", "one", "two", "few", "many", "other"];
  obj32[0] = items61;
  const items62 = ["one", "many", "other"];
  obj32[1] = items62;
  obj5[97] = obj32;
  obj5[98] = obj1;
  const obj33 = { cardinal: null, ordinal: null };
  const items63 = ["zero", "one", "other"];
  obj33[0] = items63;
  const items64 = ["other"];
  obj33[1] = items64;
  obj5[99] = obj33;
  obj5[100] = obj1;
  obj5[101] = obj1;
  const obj34 = { cardinal: null, ordinal: null };
  const items65 = ["one", "other"];
  obj34[0] = items65;
  const items66 = ["many", "other"];
  obj34[1] = items66;
  obj5[102] = obj34;
  obj5[103] = obj3;
  obj5[104] = obj1;
  const obj35 = { cardinal: null, ordinal: null };
  const items67 = ["other"];
  obj35[0] = items67;
  const items68 = ["one", "other"];
  obj35[1] = items68;
  obj5[105] = obj35;
  const obj36 = { cardinal: null, ordinal: null };
  const items69 = ["one", "few", "many", "other"];
  obj36[0] = items69;
  const items70 = ["other"];
  obj36[1] = items70;
  obj5[106] = obj36;
  const obj37 = { cardinal: null, ordinal: null };
  const items71 = ["zero", "one", "other"];
  obj37[0] = items71;
  const items72 = ["other"];
  obj37[1] = items72;
  obj5[107] = obj37;
  obj5[108] = obj1;
  obj5[109] = obj1;
  obj5[110] = obj1;
  const obj38 = { cardinal: null, ordinal: null };
  const items73 = ["one", "other"];
  obj38[0] = items73;
  const items74 = ["one", "two", "many", "other"];
  obj38[1] = items74;
  obj5[111] = obj38;
  obj5[112] = obj1;
  obj5[113] = obj1;
  const obj39 = { cardinal: null, ordinal: null };
  const items75 = ["one", "few", "other"];
  obj39[0] = items75;
  const items76 = ["one", "other"];
  obj39[1] = items76;
  obj5[114] = obj39;
  const obj40 = { cardinal: null, ordinal: null };
  const items77 = ["one", "other"];
  obj40[0] = items77;
  const items78 = ["one", "two", "few", "other"];
  obj40[1] = items78;
  obj5[115] = obj40;
  const obj41 = { cardinal: null, ordinal: null };
  const items79 = ["other"];
  obj41[0] = items79;
  const items80 = ["one", "other"];
  obj41[1] = items80;
  obj5[116] = obj41;
  const obj42 = { cardinal: null, ordinal: null };
  const items81 = ["one", "two", "few", "many", "other"];
  obj42[0] = items81;
  const items82 = ["other"];
  obj42[1] = items82;
  obj5[117] = obj42;
  obj5[118] = obj3;
  obj5[119] = obj1;
  obj5[120] = obj4;
  obj5[121] = obj1;
  obj5[122] = obj1;
  obj5[123] = obj2;
  obj5[124] = obj1;
  obj5[125] = obj1;
  obj5[126] = obj1;
  obj5[127] = obj1;
  obj5[128] = obj3;
  obj5[129] = obj1;
  obj5[130] = obj1;
  obj5[131] = obj1;
  obj5[132] = obj1;
  obj5[133] = obj1;
  const obj43 = { cardinal: null, ordinal: null };
  const items83 = ["one", "other"];
  obj43[0] = items83;
  const items84 = ["one", "two", "few", "many", "other"];
  obj43[1] = items84;
  obj5[134] = obj43;
  obj5[135] = obj1;
  obj5[136] = obj3;
  obj5[137] = obj1;
  obj5[138] = obj1;
  obj5[139] = obj1;
  const obj44 = { cardinal: null, ordinal: null };
  const items85 = ["one", "few", "many", "other"];
  obj44[0] = items85;
  const items86 = ["other"];
  obj44[1] = items86;
  obj5[140] = obj44;
  const obj45 = { cardinal: null, ordinal: null };
  const items87 = ["zero", "one", "other"];
  obj45[0] = items87;
  const items88 = ["other"];
  obj45[1] = items88;
  obj5[141] = obj45;
  obj5[142] = obj1;
  const obj46 = { cardinal: null, ordinal: null };
  const items89 = ["one", "many", "other"];
  obj46[0] = items89;
  const items90 = ["other"];
  obj46[1] = items90;
  obj5[143] = obj46;
  const obj47 = { cardinal: null, ordinal: null };
  const items91 = ["one", "many", "other"];
  obj47[0] = items91;
  const items92 = ["other"];
  obj47[1] = items92;
  obj5[144] = obj47;
  obj5[145] = obj1;
  const obj48 = { cardinal: null, ordinal: null };
  const items93 = ["one", "few", "other"];
  obj48[0] = items93;
  const items94 = ["one", "other"];
  obj48[1] = items94;
  obj5[146] = obj48;
  obj5[147] = obj1;
  const obj49 = { cardinal: null, ordinal: null };
  const items95 = ["one", "few", "many", "other"];
  obj49[0] = items95;
  const items96 = ["other"];
  obj49[1] = items96;
  obj5[148] = obj49;
  obj5[149] = obj1;
  obj5[150] = obj3;
  obj5[151] = obj1;
  obj5[152] = obj4;
  const obj50 = { cardinal: null, ordinal: null };
  const items97 = ["one", "other"];
  obj50[0] = items97;
  const items98 = ["many", "other"];
  obj50[1] = items98;
  obj5[153] = obj50;
  const obj51 = { cardinal: null, ordinal: null };
  items = ["one", "other"];
  obj51[0] = items;
  items = ["many", "other"];
  obj51[1] = items;
  obj5[154] = obj51;
  obj5[155] = obj1;
  obj5[156] = obj1;
  obj5[157] = obj4;
  obj5[158] = obj1;
  obj5[159] = obj3;
  obj5[160] = obj3;
  const obj52 = { cardinal: null, ordinal: null };
  items = ["one", "few", "other"];
  obj52[0] = items;
  items = ["other"];
  obj52[1] = items;
  obj5[161] = obj52;
  const obj53 = { cardinal: null, ordinal: null };
  items = ["one", "few", "other"];
  obj53[0] = items;
  items = ["other"];
  obj53[1] = items;
  obj5[162] = obj53;
  obj5[163] = obj1;
  const obj54 = { cardinal: null, ordinal: null };
  items = ["one", "few", "many", "other"];
  obj54[0] = items;
  items = ["other"];
  obj54[1] = items;
  obj5[164] = obj54;
  const obj55 = { cardinal: null, ordinal: null };
  items = ["one", "two", "few", "other"];
  obj55[0] = items;
  items = ["other"];
  obj55[1] = items;
  obj5[165] = obj55;
  obj5[166] = obj4;
  obj5[167] = obj4;
  obj5[168] = obj4;
  obj5[169] = obj4;
  obj5[170] = obj4;
  obj5[171] = obj1;
  obj5[172] = obj1;
  const obj56 = { cardinal: null, ordinal: null };
  items = ["one", "other"];
  obj56[0] = items;
  items = ["one", "many", "other"];
  obj56[1] = items;
  obj5[173] = obj56;
  const obj57 = { cardinal: null, ordinal: null };
  items = ["one", "few", "other"];
  obj57[0] = items;
  items = ["other"];
  obj57[1] = items;
  obj5[174] = obj57;
  obj5[175] = obj1;
  obj5[176] = obj1;
  obj5[177] = obj1;
  obj5[178] = obj3;
  obj5[179] = obj2;
  obj5[180] = obj1;
  obj5[181] = obj1;
  obj5[182] = obj1;
  obj5[183] = obj1;
  obj5[184] = obj1;
  obj5[185] = obj3;
  obj5[186] = obj1;
  obj5[187] = obj1;
  const obj58 = { cardinal: null, ordinal: null };
  items = ["one", "other"];
  obj58[0] = items;
  items = ["few", "other"];
  obj58[1] = items;
  obj5[188] = obj58;
  obj5[189] = obj2;
  obj5[190] = obj1;
  obj5[191] = obj3;
  obj5[192] = obj3;
  obj5[193] = obj1;
  obj5[194] = obj1;
  obj5[195] = obj1;
  obj5[196] = obj1;
  const obj59 = { cardinal: null, ordinal: null };
  items = ["one", "few", "many", "other"];
  obj59[0] = items;
  items = ["few", "other"];
  obj59[1] = items;
  obj5[197] = obj59;
  obj5[198] = obj3;
  obj5[199] = obj1;
  obj5[200] = obj1;
  obj5[201] = obj1;
  const obj60 = { cardinal: null, ordinal: null };
  items = ["one", "many", "other"];
  obj60[0] = items;
  items = ["many", "other"];
  obj60[1] = items;
  obj5[202] = obj60;
  const obj61 = { cardinal: null, ordinal: null };
  items = ["other"];
  obj61[0] = items;
  items = ["one", "other"];
  obj61[1] = items;
  obj5[203] = obj61;
  obj5[204] = obj1;
  obj5[205] = obj1;
  obj5[206] = obj1;
  obj5[207] = obj1;
  obj5[208] = obj3;
  obj5[209] = obj1;
  obj5[210] = obj1;
  obj5[211] = obj1;
  obj5[212] = obj3;
  obj5[213] = obj3;
  obj5[214] = obj3;
  obj5[215] = obj1;
  const _Object4 = Object;
  const frozen = Object.freeze(obj);
  let _default2 = obj5;
  if (obj5) {
    _default2 = obj5;
    if (obj5.__esModule) {
      const _Object5 = Object;
      const call2 = hasOwnProperty2.call;
      if (typeof call2 === "unknown") {
        let hasOwnProperty2Result = hasOwnProperty2("default");
      } else {
        hasOwnProperty2Result = call2(obj5, "default");
      }
      _default2 = obj5;
      if (hasOwnProperty2Result) {
        _default2 = obj5.default;
      }
    }
  }
  const obj62 = Object.create(null);
  obj62[0] = _default2;
  items = [obj5];
  obj64 = obj62;
  const item1 = items.forEach((str) => {
    closure_0 = str;
    let tmp = str;
    if (str) {
      tmp = typeof str !== "string";
    }
    if (tmp) {
      const _Array = Array;
      tmp = !Array.isArray(str);
    }
    if (tmp) {
      let _Object = Object;
      const keys = Object.keys(str);
      const item = keys.forEach((arg0) => {
        closure_0 = arg0;
        if ("default" !== arg0) {
          if (!(arg0 in closure_0)) {
            const _Object = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(closure_0, arg0);
            if (!ownPropertyDescriptor.get) {
              const obj = { enumerable: true, get: null };
              obj[1] = function get() {
                return table[table];
              };
              ownPropertyDescriptor = obj;
            }
            Object.defineProperty(tmp, arg0, ownPropertyDescriptor);
          }
        }
      });
    }
  });
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
    let str = arg1;
    if (!arg1) {
      str = "other";
    }
    return str;
  };
  const obj63 = { af: null, ak: null, am: null, an: null, ar: null, as: null, az: null, be: null, bg: null, bn: null, bs: null, ca: null, cs: null, cy: null, da: null, de: null, el: null, en: null, es: null, et: null, eu: null, fa: null, fi: null, fil: null, fr: null, ga: null, gl: null, gsw: null, gu: null, he: null, hi: null, hr: null, hu: null, hy: null, ia: null, id: null, io: null, is: null, it: null, ja: null, ka: null, kk: null, km: null, kn: null, ko: null, ky: null, lij: null, lo: null, lt: null, lv: null, mk: null, ml: null, mn: null, mr: null, ms: null, my: null, nb: null, ne: null, nl: null, no: null, or: null, pa: null, pcm: null, pl: null, ps: null, pt: null, ro: null, ru: null, sc: null, scn: null, sd: null, si: null, sk: null, sl: null, sq: null, sr: null, sv: null, sw: null, ta: null, te: null, th: null, tk: null, tr: null, ug: null, uk: null, ur: null, uz: null, vi: null, yue: null, zh: null, zu: null };
  obj63[0] = fn7;
  obj63[1] = fn8;
  obj63[2] = fn9;
  obj63[3] = fn7;
  obj63[4] = function ar(arg0, arg1) {
    let str = "few";
    if ("few" !== arg1) {
      let str2 = "many";
      if ("many" !== arg1) {
        if ("zero" !== arg0) {
          let str6 = "other";
          if (tmp2) {
            str6 = "other";
          }
          str2 = str6;
        }
        str6 = "zero";
      }
      str = str2;
    }
    return str;
  };
  obj63[5] = fn9;
  obj63[6] = fn9;
  obj63[7] = fn9;
  obj63[8] = fn7;
  obj63[9] = fn9;
  obj63[10] = fn9;
  obj63[11] = fn7;
  obj63[12] = fn9;
  obj63[13] = fn9;
  obj63[14] = fn9;
  obj63[15] = fn9;
  obj63[16] = fn9;
  obj63[17] = fn7;
  obj63[18] = fn7;
  obj63[19] = fn7;
  obj63[20] = fn7;
  obj63[21] = fn8;
  obj63[22] = fn7;
  obj63[23] = fn9;
  obj63[24] = fn9;
  obj63[25] = fn9;
  obj63[26] = fn9;
  obj63[27] = fn9;
  obj63[28] = fn9;
  obj63[29] = fn7;
  obj63[30] = fn9;
  obj63[31] = fn9;
  obj63[32] = fn9;
  obj63[33] = fn9;
  obj63[34] = fn7;
  obj63[35] = fn7;
  obj63[36] = fn7;
  obj63[37] = fn9;
  obj63[38] = fn9;
  obj63[39] = fn7;
  obj63[40] = function ka(arg0, arg1) {
    let str = arg0;
    if (!arg0) {
      str = "other";
    }
    return str;
  };
  obj63[41] = fn9;
  obj63[42] = fn7;
  obj63[43] = fn9;
  obj63[44] = fn7;
  obj63[45] = fn9;
  obj63[46] = fn9;
  obj63[47] = fn7;
  obj63[48] = fn9;
  obj63[49] = function lv(arg0, arg1) {
    let str = "other";
    if ("one" === arg1) {
      str = "one";
    }
    return str;
  };
  obj63[50] = fn7;
  obj63[51] = fn9;
  obj63[52] = fn9;
  obj63[53] = fn9;
  obj63[54] = fn7;
  obj63[55] = fn7;
  obj63[56] = fn7;
  obj63[57] = fn9;
  obj63[58] = fn9;
  obj63[59] = fn7;
  obj63[60] = fn8;
  obj63[61] = fn9;
  obj63[62] = fn7;
  obj63[63] = fn9;
  obj63[64] = fn9;
  obj63[65] = fn9;
  obj63[66] = function ro(arg0, arg1) {
    if ("few" === arg1) {
      let str = "few";
    } else {
      str = "other";
    }
    return str;
  };
  obj63[67] = fn9;
  obj63[68] = fn9;
  obj63[69] = fn9;
  obj63[70] = fn8;
  obj63[71] = function si(arg0, arg1) {
    let str = "other";
    if ("one" === arg0) {
      str = "other";
      if ("one" === arg1) {
        str = "one";
      }
    }
    return str;
  };
  obj63[72] = fn9;
  obj63[73] = function sl(arg0, arg1) {
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
  };
  obj63[74] = fn9;
  obj63[75] = fn9;
  obj63[76] = fn7;
  obj63[77] = fn9;
  obj63[78] = fn9;
  obj63[79] = fn9;
  obj63[80] = fn7;
  obj63[81] = fn9;
  obj63[82] = fn9;
  obj63[83] = fn9;
  obj63[84] = fn9;
  obj63[85] = fn7;
  obj63[86] = fn9;
  obj63[87] = fn7;
  obj63[88] = fn7;
  obj63[89] = fn7;
  obj63[90] = fn9;
  const _Object7 = Object;
  const frozen1 = Object.freeze(obj62);
  let _default3 = obj63;
  if (obj63.__esModule) {
    const _Object8 = Object;
    const call3 = hasOwnProperty3.call;
    if (typeof call3 === "unknown") {
      let hasOwnProperty3Result = hasOwnProperty3("default");
    } else {
      hasOwnProperty3Result = call3(obj63, "default");
    }
    _default3 = obj63;
    if (hasOwnProperty3Result) {
      _default3 = obj63.default;
    }
  }
  if (!_default) {
    _default = frozen;
  }
  obj64 = _default;
  if (!_default2) {
    _default2 = frozen1;
  }
  let frozen2 = _default3;
  if (!_default3) {
    obj64 = Object.create(null);
    obj64[0] = _default3;
    items = [obj63];
    const item2 = items.forEach((str) => {
      closure_0 = str;
      let tmp = str;
      if (str) {
        tmp = typeof str !== "string";
      }
      if (tmp) {
        const _Array = Array;
        tmp = !Array.isArray(str);
      }
      if (tmp) {
        let _Object = Object;
        const keys = Object.keys(str);
        const item = keys.forEach((arg0) => {
          closure_0 = arg0;
          if ("default" !== arg0) {
            if (!(arg0 in closure_0)) {
              const _Object = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(closure_0, arg0);
              if (!ownPropertyDescriptor.get) {
                const obj = { enumerable: true, get: null };
                obj[1] = function get() {
                  return table[table];
                };
                ownPropertyDescriptor = obj;
              }
              Object.defineProperty(tmp, arg0, ownPropertyDescriptor);
            }
          }
        });
      }
    });
    const _Object9 = Object;
    frozen2 = Object.freeze(obj64);
  }
  function id(arg0) {

  }
  const _Intl = Intl;
  module.exports = obj.default(Intl.NumberFormat, function getSelector(arg0) {
    if (typeof id !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let str = "pt_PT";
    if ("pt-PT" !== arg0) {
      str = arg0;
    }
    return obj64[str];
  }, function getCategories(arg0, arg1) {
    if (typeof id !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let str = "pt_PT";
    if ("pt-PT" !== arg0) {
      str = arg0;
    }
    let str2 = "cardinal";
    if (arg1) {
      str2 = "ordinal";
    }
    return _default2[str][str2];
  }, function getRangeSelector(arg0) {
    if (typeof id !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let str = "pt_PT";
    if ("pt-PT" !== arg0) {
      str = arg0;
    }
    return frozen2[str];
  });
}
obj = { default: _typeof };