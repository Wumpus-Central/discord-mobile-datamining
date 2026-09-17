// === Module 14507: ? ===

// Module 14507
import _typeof from "module_14508" /* 14508 */;

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
  const obj2 = { af: null, ak: null, am: null, an: null, ar: null, ars: null, as: null, asa: null, ast: null, az: null, bal: null, be: null, bem: null, bez: null, bg: null, bho: null, bm: null, bn: null, bo: null, br: null, brx: null, bs: null, ca: null, ce: null, ceb: null, cgg: null, chr: null, ckb: null, cs: null, cy: null, da: null, de: null, doi: null, dsb: null, dv: null, dz: null, ee: null, el: null, en: null, eo: null, es: null, et: null, eu: null, fa: null, ff: null, fi: null, fil: null, fo: null, fr: null, fur: null, fy: null, ga: null, gd: null, gl: null, gsw: null, gu: null, guw: null, gv: null, ha: null, haw: null, he: null, hi: null, hnj: null, hr: null, hsb: null, hu: null, hy: null, ia: null, id: null, ig: null, ii: null, io: null, is: null, it: null, iu: null, ja: null, jbo: null, jgo: null, jmc: null, jv: null, jw: null, ka: null, kab: null, kaj: null, kcg: null, kde: null, kea: null, kk: null, kkj: null, kl: null, km: null, kn: null, ko: null, ks: null, ksb: null, ksh: null, ku: null, kw: null, ky: null, lag: null, lb: null, lg: null, lij: null, lkt: null, ln: null, lo: null, lt: null, lv: null, mas: null, mg: null, mgo: null, mk: null, ml: null, mn: null, mo: null, mr: null, ms: null, mt: null, my: null, nah: null, naq: null, nb: null, nd: null, ne: null, nl: null, nn: null, nnh: null, no: null, nqo: null, nr: null, nso: null, ny: null, nyn: null, om: null, or: null, os: null, osa: null, pa: null, pap: null, pcm: null, pl: null, prg: null, ps: null, pt: null, pt_PT: null, rm: null, ro: null, rof: null, ru: null, rwk: null, sah: null, saq: null, sat: null, sc: null, scn: null, sd: null, sdh: null, se: null, seh: null, ses: null, sg: null, sh: null, shi: null, si: null, sk: null, sl: null, sma: null, smi: null, smj: null, smn: null, sms: null, sn: null, so: null, sq: null, sr: null, ss: null, ssy: null, st: null, su: null, sv: null, sw: null, syr: null, ta: null, te: null, teo: null, th: null, ti: null, tig: null, tk: null, tl: null, tn: null, to: null, tpi: null, tr: null, ts: null, tzm: null, ug: null, uk: null, und: null, ur: null, uz: null, ve: null, vec: null, vi: null, vo: null, vun: null, wa: null, wae: null, wo: null, xh: null, xog: null, yi: null, yo: null, yue: null, zh: null, zu: null };
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
  obj2.af = fn;
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
  obj2.ak = fn2;
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
  obj2.am = fn3;
  obj2.an = fn;
  obj2.ar = function ar(arg0, arg1) {
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
  obj2.ars = function ars(arg0, arg1) {
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
  obj2.as = function as(arg0, arg1) {
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
  obj2.asa = fn;
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
  obj2.ast = fn4;
  obj2.az = function az(arg0, arg1) {
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
  obj2.bal = function bal(arg0, arg1) {
    let str = "other";
    if (1 == arg0) {
      str = "one";
    }
    return str;
  };
  obj2.be = function be(arg0, arg1) {
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
  obj2.bem = fn;
  obj2.bez = fn;
  obj2.bg = fn;
  obj2.bho = fn2;
  const fn5 = function e(arg0, arg1) {
    return "other";
  };
  obj2.bm = fn5;
  obj2.bn = function bn(arg0, arg1) {
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
  obj2.bo = fn5;
  obj2.br = function br(arg0, arg1) {
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
  obj2.brx = fn;
  obj2.bs = function bs(arg0, arg1) {
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
  obj2.ca = function ca(arg0, arg1) {
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
  obj2.ce = fn;
  obj2.ceb = function ceb(arg0, arg1) {
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
  obj2.cgg = fn;
  obj2.chr = fn;
  obj2.ckb = fn;
  obj2.cs = function cs(arg0, arg1) {
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
  obj2.cy = function cy(arg0, arg1) {
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
  obj2.da = function da(arg0, arg1) {
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
  obj2.de = fn4;
  obj2.doi = fn3;
  obj2.dsb = function dsb(arg0, arg1) {
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
  obj2.dv = fn;
  obj2.dz = fn5;
  obj2.ee = fn;
  obj2.el = fn;
  obj2.en = function en(arg0, arg1) {
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
  obj2.eo = fn;
  obj2.es = function es(arg0, arg1) {
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
  obj2.et = fn4;
  obj2.eu = fn;
  obj2.fa = fn3;
  obj2.ff = function ff(arg0, arg1) {
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
  obj2.fi = fn4;
  obj2.fil = function fil(arg0, arg1) {
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
  obj2.fo = fn;
  obj2.fr = function fr(arg0, arg1) {
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
  obj2.fur = fn;
  obj2.fy = fn4;
  obj2.ga = function ga(arg0, arg1) {
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
  obj2.gd = function gd(arg0, arg1) {
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
  obj2.gl = fn4;
  obj2.gsw = fn;
  obj2.gu = function gu(arg0, arg1) {
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
  obj2.guw = fn2;
  obj2.gv = function gv(arg0, arg1) {
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
  obj2.ha = fn;
  obj2.haw = fn;
  obj2.he = function he(arg0, arg1) {
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
  obj2.hi = function hi(arg0, arg1) {
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
  obj2.hnj = fn5;
  obj2.hr = function hr(arg0, arg1) {
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
  obj2.hsb = function hsb(arg0, arg1) {
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
  obj2.hu = function hu(arg0, arg1) {
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
  obj2.hy = function hy(arg0, arg1) {
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
  obj2.ia = fn4;
  obj2.id = fn5;
  obj2.ig = fn5;
  obj2.ii = fn5;
  obj2.io = fn4;
  obj2.is = function is(arg0, arg1) {
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
  obj2.it = function it(arg0, arg1) {
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
  obj2.iu = fn6;
  obj2.ja = fn5;
  obj2.jbo = fn5;
  obj2.jgo = fn;
  obj2.jmc = fn;
  obj2.jv = fn5;
  obj2.jw = fn5;
  obj2.ka = function ka(arg0, arg1) {
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
  obj2.kab = function kab(arg0, arg1) {
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
  obj2.kaj = fn;
  obj2.kcg = fn;
  obj2.kde = fn5;
  obj2.kea = fn5;
  obj2.kk = function kk(arg0, arg1) {
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
  obj2.kkj = fn;
  obj2.kl = fn;
  obj2.km = fn5;
  obj2.kn = fn3;
  obj2.ko = fn5;
  obj2.ks = fn;
  obj2.ksb = fn;
  obj2.ksh = function ksh(arg0, arg1) {
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
  obj2.ku = fn;
  obj2.kw = function kw(arg0, arg1) {
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
  obj2.ky = fn;
  obj2.lag = function lag(arg0, arg1) {
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
  obj2.lb = fn;
  obj2.lg = fn;
  obj2.lij = function lij(arg0, arg1) {
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
  obj2.lkt = fn5;
  obj2.ln = fn2;
  obj2.lo = function lo(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj2.lt = function lt(arg0, arg1) {
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
  obj2.lv = function lv(arg0, arg1) {
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
  obj2.mas = fn;
  obj2.mg = fn2;
  obj2.mgo = fn;
  obj2.mk = function mk(arg0, arg1) {
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
  obj2.ml = fn;
  obj2.mn = fn;
  obj2.mo = function mo(arg0, arg1) {
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
  obj2.mr = function mr(arg0, arg1) {
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
  obj2.ms = function ms(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj2.mt = function mt(arg0, arg1) {
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
  obj2.my = fn5;
  obj2.nah = fn;
  obj2.naq = fn6;
  obj2.nb = fn;
  obj2.nd = fn;
  obj2.ne = function ne(arg0, arg1) {
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
  obj2.nl = fn4;
  obj2.nn = fn;
  obj2.nnh = fn;
  obj2.no = fn;
  obj2.nqo = fn5;
  obj2.nr = fn;
  obj2.nso = fn2;
  obj2.ny = fn;
  obj2.nyn = fn;
  obj2.om = fn;
  obj2.or = function or(arg0, arg1) {
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
  obj2.os = fn;
  obj2.osa = fn5;
  obj2.pa = fn2;
  obj2.pap = fn;
  obj2.pcm = fn3;
  obj2.pl = function pl(arg0, arg1) {
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
  obj2.prg = function prg(arg0, arg1) {
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
  obj2.ps = fn;
  obj2.pt = function pt(arg0, arg1) {
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
  obj2.pt_PT = function pt_PT(arg0, arg1) {
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
  obj2.rm = fn;
  obj2.ro = function ro(arg0, arg1) {
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
  obj2.rof = fn;
  obj2.ru = function ru(arg0, arg1) {
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
  obj2.rwk = fn;
  obj2.sah = fn5;
  obj2.saq = fn;
  obj2.sat = fn6;
  obj2.sc = function sc(arg0, arg1) {
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
  obj2.scn = function scn(arg0, arg1) {
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
  obj2.sd = fn;
  obj2.sdh = fn;
  obj2.se = fn6;
  obj2.seh = fn;
  obj2.ses = fn5;
  obj2.sg = fn5;
  obj2.sh = function sh(arg0, arg1) {
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
  obj2.shi = function shi(arg0, arg1) {
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
  obj2.si = function si(arg0, arg1) {
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
  obj2.sk = function sk(arg0, arg1) {
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
  obj2.sl = function sl(arg0, arg1) {
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
  obj2.sma = fn6;
  obj2.smi = fn6;
  obj2.smj = fn6;
  obj2.smn = fn6;
  obj2.sms = fn6;
  obj2.sn = fn;
  obj2.so = fn;
  obj2.sq = function sq(arg0, arg1) {
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
  obj2.sr = function sr(arg0, arg1) {
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
  obj2.ss = fn;
  obj2.ssy = fn;
  obj2.st = fn;
  obj2.su = fn5;
  obj2.sv = function sv(arg0, arg1) {
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
  obj2.sw = fn4;
  obj2.syr = fn;
  obj2.ta = fn;
  obj2.te = fn;
  obj2.teo = fn;
  obj2.th = fn5;
  obj2.ti = fn2;
  obj2.tig = fn;
  obj2.tk = function tk(arg0, arg1) {
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
  obj2.tl = function tl(arg0, arg1) {
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
  obj2.tn = fn;
  obj2.to = fn5;
  obj2.tpi = fn5;
  obj2.tr = fn;
  obj2.ts = fn;
  obj2.tzm = function tzm(arg0, arg1) {
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
  obj2.ug = fn;
  obj2.uk = function uk(arg0, arg1) {
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
  obj2.und = fn5;
  obj2.ur = fn4;
  obj2.uz = fn;
  obj2.ve = fn;
  obj2.vec = function vec(arg0, arg1) {
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
  obj2.vi = function vi(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj2.vo = fn;
  obj2.vun = fn;
  obj2.wa = fn2;
  obj2.wae = fn;
  obj2.wo = fn5;
  obj2.xh = fn;
  obj2.xog = fn;
  obj2.yi = fn4;
  obj2.yo = fn5;
  obj2.yue = fn5;
  obj2.zh = fn5;
  obj2.zu = fn3;
  let _Object = Object;
  let _default = obj2;
  if (obj2) {
    _default = obj2;
    if (obj2.__esModule) {
      const _Object2 = Object;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("default");
      } else {
        hasOwnPropertyResult = call(obj2, "default");
      }
      _default = obj2;
      if (hasOwnPropertyResult) {
        _default = obj2.default;
      }
    }
  }
  const merged = Object.assign({ default: null });
  merged[0] = _default;
  const items = [obj2];
  let item = items.forEach((item) => {
    closure_0 = item;
    let tmp = item;
    if (item) {
      tmp = typeof item !== "string";
    }
    if (tmp) {
      const _Array = Array;
      tmp = !Array.isArray(item);
    }
    if (tmp) {
      let _Object = Object;
      const keys = Object.keys(item);
      item = keys.forEach((item) => {
        if ("default" !== item) {
          if (!(item in item)) {
            const _Object = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(item, item);
            if (!ownPropertyDescriptor.get) {
              const obj = {
                enumerable: true,
                get() {
                        return item[item];
                      }
              };
              ownPropertyDescriptor = obj;
            }
            Object.defineProperty(tmp, item, ownPropertyDescriptor);
          }
        }
      });
    }
  });
  const _Object3 = Object;
  const obj3 = { cardinal: null, ordinal: null };
  const items1 = ["one", "other"];
  obj3.cardinal = items1;
  const items2 = ["other"];
  obj3.ordinal = items2;
  const obj4 = { cardinal: null, ordinal: null };
  const items3 = ["one", "other"];
  obj4.cardinal = items3;
  const items4 = ["one", "other"];
  obj4.ordinal = items4;
  const obj5 = { cardinal: null, ordinal: null };
  const items5 = ["other"];
  obj5.cardinal = items5;
  const items6 = ["other"];
  obj5.ordinal = items6;
  const obj6 = { cardinal: null, ordinal: null };
  const items7 = ["one", "two", "other"];
  obj6.cardinal = items7;
  const items8 = ["other"];
  obj6.ordinal = items8;
  const obj7 = { af: obj3, ak: obj3, am: obj3, an: obj3, ar: null, ars: null, as: null, asa: null, ast: null, az: null, bal: null, be: null, bem: null, bez: null, bg: null, bho: null, bm: null, bn: null, bo: null, br: null, brx: null, bs: null, ca: null, ce: null, ceb: null, cgg: null, chr: null, ckb: null, cs: null, cy: null, da: null, de: null, doi: null, dsb: null, dv: null, dz: null, ee: null, el: null, en: null, eo: null, es: null, et: null, eu: null, fa: null, ff: null, fi: null, fil: null, fo: null, fr: null, fur: null, fy: null, ga: null, gd: null, gl: null, gsw: null, gu: null, guw: null, gv: null, ha: null, haw: null, he: null, hi: null, hnj: null, hr: null, hsb: null, hu: null, hy: null, ia: null, id: null, ig: null, ii: null, io: null, is: null, it: null, iu: null, ja: null, jbo: null, jgo: null, jmc: null, jv: null, jw: null, ka: null, kab: null, kaj: null, kcg: null, kde: null, kea: null, kk: null, kkj: null, kl: null, km: null, kn: null, ko: null, ks: null, ksb: null, ksh: null, ku: null, kw: null, ky: null, lag: null, lb: null, lg: null, lij: null, lkt: null, ln: null, lo: null, lt: null, lv: null, mas: null, mg: null, mgo: null, mk: null, ml: null, mn: null, mo: null, mr: null, ms: null, mt: null, my: null, nah: null, naq: null, nb: null, nd: null, ne: null, nl: null, nn: null, nnh: null, no: null, nqo: null, nr: null, nso: null, ny: null, nyn: null, om: null, or: null, os: null, osa: null, pa: null, pap: null, pcm: null, pl: null, prg: null, ps: null, pt: null, pt_PT: null, rm: null, ro: null, rof: null, ru: null, rwk: null, sah: null, saq: null, sat: null, sc: null, scn: null, sd: null, sdh: null, se: null, seh: null, ses: null, sg: null, sh: null, shi: null, si: null, sk: null, sl: null, sma: null, smi: null, smj: null, smn: null, sms: null, sn: null, so: null, sq: null, sr: null, ss: null, ssy: null, st: null, su: null, sv: null, sw: null, syr: null, ta: null, te: null, teo: null, th: null, ti: null, tig: null, tk: null, tl: null, tn: null, to: null, tpi: null, tr: null, ts: null, tzm: null, ug: null, uk: null, und: null, ur: null, uz: null, ve: null, vec: null, vi: null, vo: null, vun: null, wa: null, wae: null, wo: null, xh: null, xog: null, yi: null, yo: null, yue: null, zh: null, zu: null };
  const obj8 = { cardinal: null, ordinal: null };
  const items9 = ["zero", "one", "two", "few", "many", "other"];
  obj8.cardinal = items9;
  const items10 = ["other"];
  obj8.ordinal = items10;
  obj7.ar = obj8;
  const obj9 = { cardinal: null, ordinal: null };
  const items11 = ["zero", "one", "two", "few", "many", "other"];
  obj9.cardinal = items11;
  const items12 = ["other"];
  obj9.ordinal = items12;
  obj7.ars = obj9;
  const obj10 = { cardinal: null, ordinal: null };
  const items13 = ["one", "other"];
  obj10.cardinal = items13;
  const items14 = ["one", "two", "few", "many", "other"];
  obj10.ordinal = items14;
  obj7.as = obj10;
  obj7.asa = obj3;
  obj7.ast = obj3;
  const obj11 = { cardinal: null, ordinal: null };
  const items15 = ["one", "other"];
  obj11.cardinal = items15;
  const items16 = ["one", "few", "many", "other"];
  obj11.ordinal = items16;
  obj7.az = obj11;
  obj7.bal = obj4;
  const obj12 = { cardinal: null, ordinal: null };
  const items17 = ["one", "few", "many", "other"];
  obj12.cardinal = items17;
  const items18 = ["few", "other"];
  obj12.ordinal = items18;
  obj7.be = obj12;
  obj7.bem = obj3;
  obj7.bez = obj3;
  obj7.bg = obj3;
  obj7.bho = obj3;
  obj7.bm = obj5;
  const obj13 = { cardinal: null, ordinal: null };
  const items19 = ["one", "other"];
  obj13.cardinal = items19;
  const items20 = ["one", "two", "few", "many", "other"];
  obj13.ordinal = items20;
  obj7.bn = obj13;
  obj7.bo = obj5;
  const obj14 = { cardinal: null, ordinal: null };
  const items21 = ["one", "two", "few", "many", "other"];
  obj14.cardinal = items21;
  const items22 = ["other"];
  obj14.ordinal = items22;
  obj7.br = obj14;
  obj7.brx = obj3;
  const obj15 = { cardinal: null, ordinal: null };
  const items23 = ["one", "few", "other"];
  obj15.cardinal = items23;
  const items24 = ["other"];
  obj15.ordinal = items24;
  obj7.bs = obj15;
  const obj16 = { cardinal: null, ordinal: null };
  const items25 = ["one", "many", "other"];
  obj16.cardinal = items25;
  const items26 = ["one", "two", "few", "other"];
  obj16.ordinal = items26;
  obj7.ca = obj16;
  obj7.ce = obj3;
  obj7.ceb = obj3;
  obj7.cgg = obj3;
  obj7.chr = obj3;
  obj7.ckb = obj3;
  const obj17 = { cardinal: null, ordinal: null };
  const items27 = ["one", "few", "many", "other"];
  obj17.cardinal = items27;
  const items28 = ["other"];
  obj17.ordinal = items28;
  obj7.cs = obj17;
  const obj18 = { cardinal: null, ordinal: null };
  const items29 = ["zero", "one", "two", "few", "many", "other"];
  obj18.cardinal = items29;
  const items30 = ["zero", "one", "two", "few", "many", "other"];
  obj18.ordinal = items30;
  obj7.cy = obj18;
  obj7.da = obj3;
  obj7.de = obj3;
  obj7.doi = obj3;
  const obj19 = { cardinal: null, ordinal: null };
  const items31 = ["one", "two", "few", "other"];
  obj19.cardinal = items31;
  const items32 = ["other"];
  obj19.ordinal = items32;
  obj7.dsb = obj19;
  obj7.dv = obj3;
  obj7.dz = obj5;
  obj7.ee = obj3;
  obj7.el = obj3;
  const obj20 = { cardinal: null, ordinal: null };
  const items33 = ["one", "other"];
  obj20.cardinal = items33;
  const items34 = ["one", "two", "few", "other"];
  obj20.ordinal = items34;
  obj7.en = obj20;
  obj7.eo = obj3;
  const obj21 = { cardinal: null, ordinal: null };
  const items35 = ["one", "many", "other"];
  obj21.cardinal = items35;
  const items36 = ["other"];
  obj21.ordinal = items36;
  obj7.es = obj21;
  obj7.et = obj3;
  obj7.eu = obj3;
  obj7.fa = obj3;
  obj7.ff = obj3;
  obj7.fi = obj3;
  obj7.fil = obj4;
  obj7.fo = obj3;
  const obj22 = { cardinal: null, ordinal: null };
  const items37 = ["one", "many", "other"];
  obj22.cardinal = items37;
  const items38 = ["one", "other"];
  obj22.ordinal = items38;
  obj7.fr = obj22;
  obj7.fur = obj3;
  obj7.fy = obj3;
  const obj23 = { cardinal: null, ordinal: null };
  const items39 = ["one", "two", "few", "many", "other"];
  obj23.cardinal = items39;
  const items40 = ["one", "other"];
  obj23.ordinal = items40;
  obj7.ga = obj23;
  const obj24 = { cardinal: null, ordinal: null };
  const items41 = ["one", "two", "few", "other"];
  obj24.cardinal = items41;
  const items42 = ["one", "two", "few", "other"];
  obj24.ordinal = items42;
  obj7.gd = obj24;
  obj7.gl = obj3;
  obj7.gsw = obj3;
  const obj25 = { cardinal: null, ordinal: null };
  const items43 = ["one", "other"];
  obj25.cardinal = items43;
  const items44 = ["one", "two", "few", "many", "other"];
  obj25.ordinal = items44;
  obj7.gu = obj25;
  obj7.guw = obj3;
  const obj26 = { cardinal: null, ordinal: null };
  const items45 = ["one", "two", "few", "many", "other"];
  obj26.cardinal = items45;
  const items46 = ["other"];
  obj26.ordinal = items46;
  obj7.gv = obj26;
  obj7.ha = obj3;
  obj7.haw = obj3;
  obj7.he = obj6;
  const obj27 = { cardinal: null, ordinal: null };
  const items47 = ["one", "other"];
  obj27.cardinal = items47;
  const items48 = ["one", "two", "few", "many", "other"];
  obj27.ordinal = items48;
  obj7.hi = obj27;
  obj7.hnj = obj5;
  const obj28 = { cardinal: null, ordinal: null };
  const items49 = ["one", "few", "other"];
  obj28.cardinal = items49;
  const items50 = ["other"];
  obj28.ordinal = items50;
  obj7.hr = obj28;
  const obj29 = { cardinal: null, ordinal: null };
  const items51 = ["one", "two", "few", "other"];
  obj29.cardinal = items51;
  const items52 = ["other"];
  obj29.ordinal = items52;
  obj7.hsb = obj29;
  obj7.hu = obj4;
  obj7.hy = obj4;
  obj7.ia = obj3;
  obj7.id = obj5;
  obj7.ig = obj5;
  obj7.ii = obj5;
  obj7.io = obj3;
  obj7.is = obj3;
  const obj30 = { cardinal: null, ordinal: null };
  const items53 = ["one", "many", "other"];
  obj30.cardinal = items53;
  const items54 = ["many", "other"];
  obj30.ordinal = items54;
  obj7.it = obj30;
  obj7.iu = obj6;
  obj7.ja = obj5;
  obj7.jbo = obj5;
  obj7.jgo = obj3;
  obj7.jmc = obj3;
  obj7.jv = obj5;
  obj7.jw = obj5;
  const obj31 = { cardinal: null, ordinal: null };
  const items55 = ["one", "other"];
  obj31.cardinal = items55;
  const items56 = ["one", "many", "other"];
  obj31.ordinal = items56;
  obj7.ka = obj31;
  obj7.kab = obj3;
  obj7.kaj = obj3;
  obj7.kcg = obj3;
  obj7.kde = obj5;
  obj7.kea = obj5;
  const obj32 = { cardinal: null, ordinal: null };
  const items57 = ["one", "other"];
  obj32.cardinal = items57;
  const items58 = ["many", "other"];
  obj32.ordinal = items58;
  obj7.kk = obj32;
  obj7.kkj = obj3;
  obj7.kl = obj3;
  obj7.km = obj5;
  obj7.kn = obj3;
  obj7.ko = obj5;
  obj7.ks = obj3;
  obj7.ksb = obj3;
  const obj33 = { cardinal: null, ordinal: null };
  const items59 = ["zero", "one", "other"];
  obj33.cardinal = items59;
  const items60 = ["other"];
  obj33.ordinal = items60;
  obj7.ksh = obj33;
  obj7.ku = obj3;
  const obj34 = { cardinal: null, ordinal: null };
  const items61 = ["zero", "one", "two", "few", "many", "other"];
  obj34.cardinal = items61;
  const items62 = ["one", "many", "other"];
  obj34.ordinal = items62;
  obj7.kw = obj34;
  obj7.ky = obj3;
  const obj35 = { cardinal: null, ordinal: null };
  const items63 = ["zero", "one", "other"];
  obj35.cardinal = items63;
  const items64 = ["other"];
  obj35.ordinal = items64;
  obj7.lag = obj35;
  obj7.lb = obj3;
  obj7.lg = obj3;
  const obj36 = { cardinal: null, ordinal: null };
  const items65 = ["one", "other"];
  obj36.cardinal = items65;
  const items66 = ["many", "other"];
  obj36.ordinal = items66;
  obj7.lij = obj36;
  obj7.lkt = obj5;
  obj7.ln = obj3;
  const obj37 = { cardinal: null, ordinal: null };
  const items67 = ["other"];
  obj37.cardinal = items67;
  const items68 = ["one", "other"];
  obj37.ordinal = items68;
  obj7.lo = obj37;
  const obj38 = { cardinal: null, ordinal: null };
  const items69 = ["one", "few", "many", "other"];
  obj38.cardinal = items69;
  const items70 = ["other"];
  obj38.ordinal = items70;
  obj7.lt = obj38;
  const obj39 = { cardinal: null, ordinal: null };
  const items71 = ["zero", "one", "other"];
  obj39.cardinal = items71;
  const items72 = ["other"];
  obj39.ordinal = items72;
  obj7.lv = obj39;
  obj7.mas = obj3;
  obj7.mg = obj3;
  obj7.mgo = obj3;
  const obj40 = { cardinal: null, ordinal: null };
  const items73 = ["one", "other"];
  obj40.cardinal = items73;
  const items74 = ["one", "two", "many", "other"];
  obj40.ordinal = items74;
  obj7.mk = obj40;
  obj7.ml = obj3;
  obj7.mn = obj3;
  const obj41 = { cardinal: null, ordinal: null };
  const items75 = ["one", "few", "other"];
  obj41.cardinal = items75;
  const items76 = ["one", "other"];
  obj41.ordinal = items76;
  obj7.mo = obj41;
  const obj42 = { cardinal: null, ordinal: null };
  const items77 = ["one", "other"];
  obj42.cardinal = items77;
  const items78 = ["one", "two", "few", "other"];
  obj42.ordinal = items78;
  obj7.mr = obj42;
  const obj43 = { cardinal: null, ordinal: null };
  const items79 = ["other"];
  obj43.cardinal = items79;
  const items80 = ["one", "other"];
  obj43.ordinal = items80;
  obj7.ms = obj43;
  const obj44 = { cardinal: null, ordinal: null };
  const items81 = ["one", "two", "few", "many", "other"];
  obj44.cardinal = items81;
  const items82 = ["other"];
  obj44.ordinal = items82;
  obj7.mt = obj44;
  obj7.my = obj5;
  obj7.nah = obj3;
  obj7.naq = obj6;
  obj7.nb = obj3;
  obj7.nd = obj3;
  obj7.ne = obj4;
  obj7.nl = obj3;
  obj7.nn = obj3;
  obj7.nnh = obj3;
  obj7.no = obj3;
  obj7.nqo = obj5;
  obj7.nr = obj3;
  obj7.nso = obj3;
  obj7.ny = obj3;
  obj7.nyn = obj3;
  obj7.om = obj3;
  const obj45 = { cardinal: null, ordinal: null };
  const items83 = ["one", "other"];
  obj45.cardinal = items83;
  const items84 = ["one", "two", "few", "many", "other"];
  obj45.ordinal = items84;
  obj7.or = obj45;
  obj7.os = obj3;
  obj7.osa = obj5;
  obj7.pa = obj3;
  obj7.pap = obj3;
  obj7.pcm = obj3;
  const obj46 = { cardinal: null, ordinal: null };
  const items85 = ["one", "few", "many", "other"];
  obj46.cardinal = items85;
  const items86 = ["other"];
  obj46.ordinal = items86;
  obj7.pl = obj46;
  const obj47 = { cardinal: null, ordinal: null };
  const items87 = ["zero", "one", "other"];
  obj47.cardinal = items87;
  const items88 = ["other"];
  obj47.ordinal = items88;
  obj7.prg = obj47;
  obj7.ps = obj3;
  const obj48 = { cardinal: null, ordinal: null };
  const items89 = ["one", "many", "other"];
  obj48.cardinal = items89;
  const items90 = ["other"];
  obj48.ordinal = items90;
  obj7.pt = obj48;
  const obj49 = { cardinal: null, ordinal: null };
  const items91 = ["one", "many", "other"];
  obj49.cardinal = items91;
  const items92 = ["other"];
  obj49.ordinal = items92;
  obj7.pt_PT = obj49;
  obj7.rm = obj3;
  const obj50 = { cardinal: null, ordinal: null };
  const items93 = ["one", "few", "other"];
  obj50.cardinal = items93;
  const items94 = ["one", "other"];
  obj50.ordinal = items94;
  obj7.ro = obj50;
  obj7.rof = obj3;
  const obj51 = { cardinal: null, ordinal: null };
  const items95 = ["one", "few", "many", "other"];
  obj51.cardinal = items95;
  const items96 = ["other"];
  obj51.ordinal = items96;
  obj7.ru = obj51;
  obj7.rwk = obj3;
  obj7.sah = obj5;
  obj7.saq = obj3;
  obj7.sat = obj6;
  const obj52 = { cardinal: null, ordinal: null };
  const items97 = ["one", "other"];
  obj52.cardinal = items97;
  const items98 = ["many", "other"];
  obj52.ordinal = items98;
  obj7.sc = obj52;
  const obj53 = { cardinal: null, ordinal: null };
  const items99 = ["one", "other"];
  obj53.cardinal = items99;
  const items100 = ["many", "other"];
  obj53.ordinal = items100;
  obj7.scn = obj53;
  obj7.sd = obj3;
  obj7.sdh = obj3;
  obj7.se = obj6;
  obj7.seh = obj3;
  obj7.ses = obj5;
  obj7.sg = obj5;
  const obj54 = { cardinal: null, ordinal: null };
  const items101 = ["one", "few", "other"];
  obj54.cardinal = items101;
  const items102 = ["other"];
  obj54.ordinal = items102;
  obj7.sh = obj54;
  const obj55 = { cardinal: null, ordinal: null };
  const items103 = ["one", "few", "other"];
  obj55.cardinal = items103;
  const items104 = ["other"];
  obj55.ordinal = items104;
  obj7.shi = obj55;
  obj7.si = obj3;
  const obj56 = { cardinal: null, ordinal: null };
  const items105 = ["one", "few", "many", "other"];
  obj56.cardinal = items105;
  const items106 = ["other"];
  obj56.ordinal = items106;
  obj7.sk = obj56;
  const obj57 = { cardinal: null, ordinal: null };
  const items107 = ["one", "two", "few", "other"];
  obj57.cardinal = items107;
  const items108 = ["other"];
  obj57.ordinal = items108;
  obj7.sl = obj57;
  obj7.sma = obj6;
  obj7.smi = obj6;
  obj7.smj = obj6;
  obj7.smn = obj6;
  obj7.sms = obj6;
  obj7.sn = obj3;
  obj7.so = obj3;
  const obj58 = { cardinal: null, ordinal: null };
  const items109 = ["one", "other"];
  obj58.cardinal = items109;
  const items110 = ["one", "many", "other"];
  obj58.ordinal = items110;
  obj7.sq = obj58;
  const obj59 = { cardinal: null, ordinal: null };
  const items111 = ["one", "few", "other"];
  obj59.cardinal = items111;
  const items112 = ["other"];
  obj59.ordinal = items112;
  obj7.sr = obj59;
  obj7.ss = obj3;
  obj7.ssy = obj3;
  obj7.st = obj3;
  obj7.su = obj5;
  obj7.sv = obj4;
  obj7.sw = obj3;
  obj7.syr = obj3;
  obj7.ta = obj3;
  obj7.te = obj3;
  obj7.teo = obj3;
  obj7.th = obj5;
  obj7.ti = obj3;
  obj7.tig = obj3;
  const obj60 = { cardinal: null, ordinal: null };
  const items113 = ["one", "other"];
  obj60.cardinal = items113;
  const items114 = ["few", "other"];
  obj60.ordinal = items114;
  obj7.tk = obj60;
  obj7.tl = obj4;
  obj7.tn = obj3;
  obj7.to = obj5;
  obj7.tpi = obj5;
  obj7.tr = obj3;
  obj7.ts = obj3;
  obj7.tzm = obj3;
  obj7.ug = obj3;
  const obj61 = { cardinal: null, ordinal: null };
  const items115 = ["one", "few", "many", "other"];
  obj61.cardinal = items115;
  const items116 = ["few", "other"];
  obj61.ordinal = items116;
  obj7.uk = obj61;
  obj7.und = obj5;
  obj7.ur = obj3;
  obj7.uz = obj3;
  obj7.ve = obj3;
  const obj62 = { cardinal: null, ordinal: null };
  const items117 = ["one", "many", "other"];
  obj62.cardinal = items117;
  const items118 = ["many", "other"];
  obj62.ordinal = items118;
  obj7.vec = obj62;
  const obj63 = { cardinal: null, ordinal: null };
  const items119 = ["other"];
  obj63.cardinal = items119;
  const items120 = ["one", "other"];
  obj63.ordinal = items120;
  obj7.vi = obj63;
  obj7.vo = obj3;
  obj7.vun = obj3;
  obj7.wa = obj3;
  obj7.wae = obj3;
  obj7.wo = obj5;
  obj7.xh = obj3;
  obj7.xog = obj3;
  obj7.yi = obj3;
  obj7.yo = obj5;
  obj7.yue = obj5;
  obj7.zh = obj5;
  obj7.zu = obj3;
  const _Object4 = Object;
  const frozen = Object.freeze(merged);
  let _default2 = obj7;
  if (obj7) {
    _default2 = obj7;
    if (obj7.__esModule) {
      const _Object5 = Object;
      const call2 = hasOwnProperty2.call;
      if (typeof call2 === "unknown") {
        let hasOwnProperty2Result = hasOwnProperty2("default");
      } else {
        hasOwnProperty2Result = call2(obj7, "default");
      }
      _default2 = obj7;
      if (hasOwnProperty2Result) {
        _default2 = obj7.default;
      }
    }
  }
  const merged1 = Object.assign({ default: null });
  merged1[0] = _default2;
  const items121 = [obj7];
  let closure_129_0 = merged1;
  const item1 = items121.forEach((item) => {
    closure_0 = item;
    let tmp = item;
    if (item) {
      tmp = typeof item !== "string";
    }
    if (tmp) {
      const _Array = Array;
      tmp = !Array.isArray(item);
    }
    if (tmp) {
      let _Object = Object;
      const keys = Object.keys(item);
      item = keys.forEach((item) => {
        if ("default" !== item) {
          if (!(item in item)) {
            const _Object = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(item, item);
            if (!ownPropertyDescriptor.get) {
              const obj = {
                enumerable: true,
                get() {
                        return item[item];
                      }
              };
              ownPropertyDescriptor = obj;
            }
            Object.defineProperty(tmp, item, ownPropertyDescriptor);
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
        let str = arg0;
        if (!arg0) {
          str = "other";
        }
        return str;
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
        if ("few" === arg1) {
          let str = "few";
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
    zu: fn9
  };
  const _Object7 = Object;
  const frozen1 = Object.freeze(merged1);
  let _default3 = obj64;
  if (obj64.__esModule) {
    const _Object8 = Object;
    const call3 = hasOwnProperty3.call;
    if (typeof call3 === "unknown") {
      let hasOwnProperty3Result = hasOwnProperty3("default");
    } else {
      hasOwnProperty3Result = call3(obj64, "default");
    }
    _default3 = obj64;
    if (hasOwnProperty3Result) {
      _default3 = obj64.default;
    }
  }
  if (!_default) {
    _default = frozen;
  }
  let closure_130_0 = _default;
  if (!_default2) {
    _default2 = frozen1;
  }
  let closure_130_1 = _default2;
  let frozen2 = _default3;
  if (!_default3) {
    const merged2 = Object.assign({ default: null });
    merged2[0] = _default3;
    const items122 = [obj64];
    let closure_131_0 = merged2;
    const item2 = items122.forEach((item) => {
      closure_0 = item;
      let tmp = item;
      if (item) {
        tmp = typeof item !== "string";
      }
      if (tmp) {
        const _Array = Array;
        tmp = !Array.isArray(item);
      }
      if (tmp) {
        let _Object = Object;
        const keys = Object.keys(item);
        item = keys.forEach((item) => {
          if ("default" !== item) {
            if (!(item in item)) {
              const _Object = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(item, item);
              if (!ownPropertyDescriptor.get) {
                const obj = {
                  enumerable: true,
                  get() {
                          return item[item];
                        }
                };
                ownPropertyDescriptor = obj;
              }
              Object.defineProperty(tmp, item, ownPropertyDescriptor);
            }
          }
        });
      }
    });
    const _Object9 = Object;
    frozen2 = Object.freeze(merged2);
  }
  let closure_130_2 = frozen2;
  let closure_130_3 = function id(arg0) {

  };
  const _Intl = Intl;
  module.exports = obj.default(Intl.NumberFormat, function getSelector(arg0) {
    if (typeof React3 === "function") {
      let str = "pt_PT";
      if ("pt-PT" !== arg0) {
        str = arg0;
      }
      return tmp[str];
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, function getCategories(arg0, arg1) {
    if (typeof React3 === "function") {
      let str = "pt_PT";
      if ("pt-PT" !== arg0) {
        str = arg0;
      }
      let str3 = "cardinal";
      if (arg1) {
        str3 = "ordinal";
      }
      return tmp[str][str3];
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, function getRangeSelector(arg0) {
    if (typeof React3 === "function") {
      let str = "pt_PT";
      if ("pt-PT" !== arg0) {
        str = arg0;
      }
      return tmp[str];
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
}
obj = { default: _typeof };