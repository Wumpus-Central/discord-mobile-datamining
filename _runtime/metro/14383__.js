// === Module 14383: ? ===

// Module 14383
import _typeof from "module_14384" /* 14384 */;

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
  obj.af = fn;
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
  obj.ak = fn2;
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
  obj.am = fn3;
  obj.an = fn;
  obj.ar = function ar(arg0, arg1) {
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
  obj.ars = function ars(arg0, arg1) {
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
  obj.as = function as(arg0, arg1) {
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
  obj.asa = fn;
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
  obj.ast = fn4;
  obj.az = function az(arg0, arg1) {
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
  obj.bal = function bal(arg0, arg1) {
    let str = "other";
    if (1 == arg0) {
      str = "one";
    }
    return str;
  };
  obj.be = function be(arg0, arg1) {
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
  obj.bem = fn;
  obj.bez = fn;
  obj.bg = fn;
  obj.bho = fn2;
  const fn5 = function e(arg0, arg1) {
    return "other";
  };
  obj.bm = fn5;
  obj.bn = function bn(arg0, arg1) {
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
  obj.bo = fn5;
  obj.br = function br(arg0, arg1) {
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
  obj.brx = fn;
  obj.bs = function bs(arg0, arg1) {
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
  obj.ca = function ca(arg0, arg1) {
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
  obj.ce = fn;
  obj.ceb = function ceb(arg0, arg1) {
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
  obj.cgg = fn;
  obj.chr = fn;
  obj.ckb = fn;
  obj.cs = function cs(arg0, arg1) {
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
  obj.cy = function cy(arg0, arg1) {
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
  obj.da = function da(arg0, arg1) {
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
  obj.de = fn4;
  obj.doi = fn3;
  obj.dsb = function dsb(arg0, arg1) {
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
  obj.dv = fn;
  obj.dz = fn5;
  obj.ee = fn;
  obj.el = fn;
  obj.en = function en(arg0, arg1) {
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
  obj.eo = fn;
  obj.es = function es(arg0, arg1) {
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
  obj.et = fn4;
  obj.eu = fn;
  obj.fa = fn3;
  obj.ff = function ff(arg0, arg1) {
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
  obj.fi = fn4;
  obj.fil = function fil(arg0, arg1) {
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
  obj.fo = fn;
  obj.fr = function fr(arg0, arg1) {
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
  obj.fur = fn;
  obj.fy = fn4;
  obj.ga = function ga(arg0, arg1) {
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
  obj.gd = function gd(arg0, arg1) {
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
  obj.gl = fn4;
  obj.gsw = fn;
  obj.gu = function gu(arg0, arg1) {
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
  obj.guw = fn2;
  obj.gv = function gv(arg0, arg1) {
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
  obj.ha = fn;
  obj.haw = fn;
  obj.he = function he(arg0, arg1) {
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
  obj.hi = function hi(arg0, arg1) {
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
  obj.hnj = fn5;
  obj.hr = function hr(arg0, arg1) {
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
  obj.hsb = function hsb(arg0, arg1) {
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
  obj.hu = function hu(arg0, arg1) {
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
  obj.hy = function hy(arg0, arg1) {
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
  obj.ia = fn4;
  obj.id = fn5;
  obj.ig = fn5;
  obj.ii = fn5;
  obj.io = fn4;
  obj.is = function is(arg0, arg1) {
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
  obj.it = function it(arg0, arg1) {
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
  obj.iu = fn6;
  obj.ja = fn5;
  obj.jbo = fn5;
  obj.jgo = fn;
  obj.jmc = fn;
  obj.jv = fn5;
  obj.jw = fn5;
  obj.ka = function ka(arg0, arg1) {
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
  obj.kab = function kab(arg0, arg1) {
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
  obj.kaj = fn;
  obj.kcg = fn;
  obj.kde = fn5;
  obj.kea = fn5;
  obj.kk = function kk(arg0, arg1) {
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
  obj.kkj = fn;
  obj.kl = fn;
  obj.km = fn5;
  obj.kn = fn3;
  obj.ko = fn5;
  obj.ks = fn;
  obj.ksb = fn;
  obj.ksh = function ksh(arg0, arg1) {
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
  obj.ku = fn;
  obj.kw = function kw(arg0, arg1) {
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
  obj.ky = fn;
  obj.lag = function lag(arg0, arg1) {
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
  obj.lb = fn;
  obj.lg = fn;
  obj.lij = function lij(arg0, arg1) {
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
  obj.lkt = fn5;
  obj.ln = fn2;
  obj.lo = function lo(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj.lt = function lt(arg0, arg1) {
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
  obj.lv = function lv(arg0, arg1) {
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
  obj.mas = fn;
  obj.mg = fn2;
  obj.mgo = fn;
  obj.mk = function mk(arg0, arg1) {
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
  obj.ml = fn;
  obj.mn = fn;
  obj.mo = function mo(arg0, arg1) {
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
  obj.mr = function mr(arg0, arg1) {
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
  obj.ms = function ms(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj.mt = function mt(arg0, arg1) {
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
  obj.my = fn5;
  obj.nah = fn;
  obj.naq = fn6;
  obj.nb = fn;
  obj.nd = fn;
  obj.ne = function ne(arg0, arg1) {
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
  obj.nl = fn4;
  obj.nn = fn;
  obj.nnh = fn;
  obj.no = fn;
  obj.nqo = fn5;
  obj.nr = fn;
  obj.nso = fn2;
  obj.ny = fn;
  obj.nyn = fn;
  obj.om = fn;
  obj.or = function or(arg0, arg1) {
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
  obj.os = fn;
  obj.osa = fn5;
  obj.pa = fn2;
  obj.pap = fn;
  obj.pcm = fn3;
  obj.pl = function pl(arg0, arg1) {
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
  obj.prg = function prg(arg0, arg1) {
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
  obj.ps = fn;
  obj.pt = function pt(arg0, arg1) {
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
  obj.pt_PT = function pt_PT(arg0, arg1) {
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
  obj.rm = fn;
  obj.ro = function ro(arg0, arg1) {
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
  obj.rof = fn;
  obj.ru = function ru(arg0, arg1) {
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
  obj.rwk = fn;
  obj.sah = fn5;
  obj.saq = fn;
  obj.sat = fn6;
  obj.sc = function sc(arg0, arg1) {
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
  obj.scn = function scn(arg0, arg1) {
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
  obj.sd = fn;
  obj.sdh = fn;
  obj.se = fn6;
  obj.seh = fn;
  obj.ses = fn5;
  obj.sg = fn5;
  obj.sh = function sh(arg0, arg1) {
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
  obj.shi = function shi(arg0, arg1) {
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
  obj.si = function si(arg0, arg1) {
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
  obj.sk = function sk(arg0, arg1) {
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
  obj.sl = function sl(arg0, arg1) {
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
  obj.sma = fn6;
  obj.smi = fn6;
  obj.smj = fn6;
  obj.smn = fn6;
  obj.sms = fn6;
  obj.sn = fn;
  obj.so = fn;
  obj.sq = function sq(arg0, arg1) {
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
  obj.sr = function sr(arg0, arg1) {
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
  obj.ss = fn;
  obj.ssy = fn;
  obj.st = fn;
  obj.su = fn5;
  obj.sv = function sv(arg0, arg1) {
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
  obj.sw = fn4;
  obj.syr = fn;
  obj.ta = fn;
  obj.te = fn;
  obj.teo = fn;
  obj.th = fn5;
  obj.ti = fn2;
  obj.tig = fn;
  obj.tk = function tk(arg0, arg1) {
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
  obj.tl = function tl(arg0, arg1) {
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
  obj.tn = fn;
  obj.to = fn5;
  obj.tpi = fn5;
  obj.tr = fn;
  obj.ts = fn;
  obj.tzm = function tzm(arg0, arg1) {
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
  obj.ug = fn;
  obj.uk = function uk(arg0, arg1) {
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
  obj.und = fn5;
  obj.ur = fn4;
  obj.uz = fn;
  obj.ve = fn;
  obj.vec = function vec(arg0, arg1) {
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
  obj.vi = function vi(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj.vo = fn;
  obj.vun = fn;
  obj.wa = fn2;
  obj.wae = fn;
  obj.wo = fn5;
  obj.xh = fn;
  obj.xog = fn;
  obj.yi = fn4;
  obj.yo = fn5;
  obj.yue = fn5;
  obj.zh = fn5;
  obj.zu = fn3;
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
  const merged = Object.assign({ default: null });
  merged[0] = _default;
  const items = [obj];
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
  obj = { cardinal: null, ordinal: null };
  const items1 = ["one", "other"];
  obj.cardinal = items1;
  const items2 = ["other"];
  obj.ordinal = items2;
  const obj1 = { cardinal: null, ordinal: null };
  const items3 = ["one", "other"];
  obj1.cardinal = items3;
  const items4 = ["one", "other"];
  obj1.ordinal = items4;
  const obj2 = { cardinal: null, ordinal: null };
  const items5 = ["other"];
  obj2.cardinal = items5;
  const items6 = ["other"];
  obj2.ordinal = items6;
  const obj3 = { cardinal: null, ordinal: null };
  const items7 = ["one", "two", "other"];
  obj3.cardinal = items7;
  const items8 = ["other"];
  obj3.ordinal = items8;
  const obj4 = { af: obj, ak: obj, am: obj, an: obj, ar: null, ars: null, as: null, asa: null, ast: null, az: null, bal: null, be: null, bem: null, bez: null, bg: null, bho: null, bm: null, bn: null, bo: null, br: null, brx: null, bs: null, ca: null, ce: null, ceb: null, cgg: null, chr: null, ckb: null, cs: null, cy: null, da: null, de: null, doi: null, dsb: null, dv: null, dz: null, ee: null, el: null, en: null, eo: null, es: null, et: null, eu: null, fa: null, ff: null, fi: null, fil: null, fo: null, fr: null, fur: null, fy: null, ga: null, gd: null, gl: null, gsw: null, gu: null, guw: null, gv: null, ha: null, haw: null, he: null, hi: null, hnj: null, hr: null, hsb: null, hu: null, hy: null, ia: null, id: null, ig: null, ii: null, io: null, is: null, it: null, iu: null, ja: null, jbo: null, jgo: null, jmc: null, jv: null, jw: null, ka: null, kab: null, kaj: null, kcg: null, kde: null, kea: null, kk: null, kkj: null, kl: null, km: null, kn: null, ko: null, ks: null, ksb: null, ksh: null, ku: null, kw: null, ky: null, lag: null, lb: null, lg: null, lij: null, lkt: null, ln: null, lo: null, lt: null, lv: null, mas: null, mg: null, mgo: null, mk: null, ml: null, mn: null, mo: null, mr: null, ms: null, mt: null, my: null, nah: null, naq: null, nb: null, nd: null, ne: null, nl: null, nn: null, nnh: null, no: null, nqo: null, nr: null, nso: null, ny: null, nyn: null, om: null, or: null, os: null, osa: null, pa: null, pap: null, pcm: null, pl: null, prg: null, ps: null, pt: null, pt_PT: null, rm: null, ro: null, rof: null, ru: null, rwk: null, sah: null, saq: null, sat: null, sc: null, scn: null, sd: null, sdh: null, se: null, seh: null, ses: null, sg: null, sh: null, shi: null, si: null, sk: null, sl: null, sma: null, smi: null, smj: null, smn: null, sms: null, sn: null, so: null, sq: null, sr: null, ss: null, ssy: null, st: null, su: null, sv: null, sw: null, syr: null, ta: null, te: null, teo: null, th: null, ti: null, tig: null, tk: null, tl: null, tn: null, to: null, tpi: null, tr: null, ts: null, tzm: null, ug: null, uk: null, und: null, ur: null, uz: null, ve: null, vec: null, vi: null, vo: null, vun: null, wa: null, wae: null, wo: null, xh: null, xog: null, yi: null, yo: null, yue: null, zh: null, zu: null };
  const obj5 = { cardinal: null, ordinal: null };
  const items9 = ["zero", "one", "two", "few", "many", "other"];
  obj5.cardinal = items9;
  const items10 = ["other"];
  obj5.ordinal = items10;
  obj4.ar = obj5;
  const obj6 = { cardinal: null, ordinal: null };
  const items11 = ["zero", "one", "two", "few", "many", "other"];
  obj6.cardinal = items11;
  const items12 = ["other"];
  obj6.ordinal = items12;
  obj4.ars = obj6;
  const obj7 = { cardinal: null, ordinal: null };
  const items13 = ["one", "other"];
  obj7.cardinal = items13;
  const items14 = ["one", "two", "few", "many", "other"];
  obj7.ordinal = items14;
  obj4.as = obj7;
  obj4.asa = obj;
  obj4.ast = obj;
  const obj8 = { cardinal: null, ordinal: null };
  const items15 = ["one", "other"];
  obj8.cardinal = items15;
  const items16 = ["one", "few", "many", "other"];
  obj8.ordinal = items16;
  obj4.az = obj8;
  obj4.bal = obj1;
  const obj9 = { cardinal: null, ordinal: null };
  const items17 = ["one", "few", "many", "other"];
  obj9.cardinal = items17;
  const items18 = ["few", "other"];
  obj9.ordinal = items18;
  obj4.be = obj9;
  obj4.bem = obj;
  obj4.bez = obj;
  obj4.bg = obj;
  obj4.bho = obj;
  obj4.bm = obj2;
  const obj10 = { cardinal: null, ordinal: null };
  const items19 = ["one", "other"];
  obj10.cardinal = items19;
  const items20 = ["one", "two", "few", "many", "other"];
  obj10.ordinal = items20;
  obj4.bn = obj10;
  obj4.bo = obj2;
  const obj11 = { cardinal: null, ordinal: null };
  const items21 = ["one", "two", "few", "many", "other"];
  obj11.cardinal = items21;
  const items22 = ["other"];
  obj11.ordinal = items22;
  obj4.br = obj11;
  obj4.brx = obj;
  const obj12 = { cardinal: null, ordinal: null };
  const items23 = ["one", "few", "other"];
  obj12.cardinal = items23;
  const items24 = ["other"];
  obj12.ordinal = items24;
  obj4.bs = obj12;
  const obj13 = { cardinal: null, ordinal: null };
  const items25 = ["one", "many", "other"];
  obj13.cardinal = items25;
  const items26 = ["one", "two", "few", "other"];
  obj13.ordinal = items26;
  obj4.ca = obj13;
  obj4.ce = obj;
  obj4.ceb = obj;
  obj4.cgg = obj;
  obj4.chr = obj;
  obj4.ckb = obj;
  const obj14 = { cardinal: null, ordinal: null };
  const items27 = ["one", "few", "many", "other"];
  obj14.cardinal = items27;
  const items28 = ["other"];
  obj14.ordinal = items28;
  obj4.cs = obj14;
  const obj15 = { cardinal: null, ordinal: null };
  const items29 = ["zero", "one", "two", "few", "many", "other"];
  obj15.cardinal = items29;
  const items30 = ["zero", "one", "two", "few", "many", "other"];
  obj15.ordinal = items30;
  obj4.cy = obj15;
  obj4.da = obj;
  obj4.de = obj;
  obj4.doi = obj;
  const obj16 = { cardinal: null, ordinal: null };
  const items31 = ["one", "two", "few", "other"];
  obj16.cardinal = items31;
  const items32 = ["other"];
  obj16.ordinal = items32;
  obj4.dsb = obj16;
  obj4.dv = obj;
  obj4.dz = obj2;
  obj4.ee = obj;
  obj4.el = obj;
  const obj17 = { cardinal: null, ordinal: null };
  const items33 = ["one", "other"];
  obj17.cardinal = items33;
  const items34 = ["one", "two", "few", "other"];
  obj17.ordinal = items34;
  obj4.en = obj17;
  obj4.eo = obj;
  const obj18 = { cardinal: null, ordinal: null };
  const items35 = ["one", "many", "other"];
  obj18.cardinal = items35;
  const items36 = ["other"];
  obj18.ordinal = items36;
  obj4.es = obj18;
  obj4.et = obj;
  obj4.eu = obj;
  obj4.fa = obj;
  obj4.ff = obj;
  obj4.fi = obj;
  obj4.fil = obj1;
  obj4.fo = obj;
  const obj19 = { cardinal: null, ordinal: null };
  const items37 = ["one", "many", "other"];
  obj19.cardinal = items37;
  const items38 = ["one", "other"];
  obj19.ordinal = items38;
  obj4.fr = obj19;
  obj4.fur = obj;
  obj4.fy = obj;
  const obj20 = { cardinal: null, ordinal: null };
  const items39 = ["one", "two", "few", "many", "other"];
  obj20.cardinal = items39;
  const items40 = ["one", "other"];
  obj20.ordinal = items40;
  obj4.ga = obj20;
  const obj21 = { cardinal: null, ordinal: null };
  const items41 = ["one", "two", "few", "other"];
  obj21.cardinal = items41;
  const items42 = ["one", "two", "few", "other"];
  obj21.ordinal = items42;
  obj4.gd = obj21;
  obj4.gl = obj;
  obj4.gsw = obj;
  const obj22 = { cardinal: null, ordinal: null };
  const items43 = ["one", "other"];
  obj22.cardinal = items43;
  const items44 = ["one", "two", "few", "many", "other"];
  obj22.ordinal = items44;
  obj4.gu = obj22;
  obj4.guw = obj;
  const obj23 = { cardinal: null, ordinal: null };
  const items45 = ["one", "two", "few", "many", "other"];
  obj23.cardinal = items45;
  const items46 = ["other"];
  obj23.ordinal = items46;
  obj4.gv = obj23;
  obj4.ha = obj;
  obj4.haw = obj;
  obj4.he = obj3;
  const obj24 = { cardinal: null, ordinal: null };
  const items47 = ["one", "other"];
  obj24.cardinal = items47;
  const items48 = ["one", "two", "few", "many", "other"];
  obj24.ordinal = items48;
  obj4.hi = obj24;
  obj4.hnj = obj2;
  const obj25 = { cardinal: null, ordinal: null };
  const items49 = ["one", "few", "other"];
  obj25.cardinal = items49;
  const items50 = ["other"];
  obj25.ordinal = items50;
  obj4.hr = obj25;
  const obj26 = { cardinal: null, ordinal: null };
  const items51 = ["one", "two", "few", "other"];
  obj26.cardinal = items51;
  const items52 = ["other"];
  obj26.ordinal = items52;
  obj4.hsb = obj26;
  obj4.hu = obj1;
  obj4.hy = obj1;
  obj4.ia = obj;
  obj4.id = obj2;
  obj4.ig = obj2;
  obj4.ii = obj2;
  obj4.io = obj;
  obj4.is = obj;
  const obj27 = { cardinal: null, ordinal: null };
  const items53 = ["one", "many", "other"];
  obj27.cardinal = items53;
  const items54 = ["many", "other"];
  obj27.ordinal = items54;
  obj4.it = obj27;
  obj4.iu = obj3;
  obj4.ja = obj2;
  obj4.jbo = obj2;
  obj4.jgo = obj;
  obj4.jmc = obj;
  obj4.jv = obj2;
  obj4.jw = obj2;
  const obj28 = { cardinal: null, ordinal: null };
  const items55 = ["one", "other"];
  obj28.cardinal = items55;
  const items56 = ["one", "many", "other"];
  obj28.ordinal = items56;
  obj4.ka = obj28;
  obj4.kab = obj;
  obj4.kaj = obj;
  obj4.kcg = obj;
  obj4.kde = obj2;
  obj4.kea = obj2;
  const obj29 = { cardinal: null, ordinal: null };
  const items57 = ["one", "other"];
  obj29.cardinal = items57;
  const items58 = ["many", "other"];
  obj29.ordinal = items58;
  obj4.kk = obj29;
  obj4.kkj = obj;
  obj4.kl = obj;
  obj4.km = obj2;
  obj4.kn = obj;
  obj4.ko = obj2;
  obj4.ks = obj;
  obj4.ksb = obj;
  const obj30 = { cardinal: null, ordinal: null };
  const items59 = ["zero", "one", "other"];
  obj30.cardinal = items59;
  const items60 = ["other"];
  obj30.ordinal = items60;
  obj4.ksh = obj30;
  obj4.ku = obj;
  const obj31 = { cardinal: null, ordinal: null };
  const items61 = ["zero", "one", "two", "few", "many", "other"];
  obj31.cardinal = items61;
  const items62 = ["one", "many", "other"];
  obj31.ordinal = items62;
  obj4.kw = obj31;
  obj4.ky = obj;
  const obj32 = { cardinal: null, ordinal: null };
  const items63 = ["zero", "one", "other"];
  obj32.cardinal = items63;
  const items64 = ["other"];
  obj32.ordinal = items64;
  obj4.lag = obj32;
  obj4.lb = obj;
  obj4.lg = obj;
  const obj33 = { cardinal: null, ordinal: null };
  const items65 = ["one", "other"];
  obj33.cardinal = items65;
  const items66 = ["many", "other"];
  obj33.ordinal = items66;
  obj4.lij = obj33;
  obj4.lkt = obj2;
  obj4.ln = obj;
  const obj34 = { cardinal: null, ordinal: null };
  const items67 = ["other"];
  obj34.cardinal = items67;
  const items68 = ["one", "other"];
  obj34.ordinal = items68;
  obj4.lo = obj34;
  const obj35 = { cardinal: null, ordinal: null };
  const items69 = ["one", "few", "many", "other"];
  obj35.cardinal = items69;
  const items70 = ["other"];
  obj35.ordinal = items70;
  obj4.lt = obj35;
  const obj36 = { cardinal: null, ordinal: null };
  const items71 = ["zero", "one", "other"];
  obj36.cardinal = items71;
  const items72 = ["other"];
  obj36.ordinal = items72;
  obj4.lv = obj36;
  obj4.mas = obj;
  obj4.mg = obj;
  obj4.mgo = obj;
  const obj37 = { cardinal: null, ordinal: null };
  const items73 = ["one", "other"];
  obj37.cardinal = items73;
  const items74 = ["one", "two", "many", "other"];
  obj37.ordinal = items74;
  obj4.mk = obj37;
  obj4.ml = obj;
  obj4.mn = obj;
  const obj38 = { cardinal: null, ordinal: null };
  const items75 = ["one", "few", "other"];
  obj38.cardinal = items75;
  const items76 = ["one", "other"];
  obj38.ordinal = items76;
  obj4.mo = obj38;
  const obj39 = { cardinal: null, ordinal: null };
  const items77 = ["one", "other"];
  obj39.cardinal = items77;
  const items78 = ["one", "two", "few", "other"];
  obj39.ordinal = items78;
  obj4.mr = obj39;
  const obj40 = { cardinal: null, ordinal: null };
  const items79 = ["other"];
  obj40.cardinal = items79;
  const items80 = ["one", "other"];
  obj40.ordinal = items80;
  obj4.ms = obj40;
  const obj41 = { cardinal: null, ordinal: null };
  const items81 = ["one", "two", "few", "many", "other"];
  obj41.cardinal = items81;
  const items82 = ["other"];
  obj41.ordinal = items82;
  obj4.mt = obj41;
  obj4.my = obj2;
  obj4.nah = obj;
  obj4.naq = obj3;
  obj4.nb = obj;
  obj4.nd = obj;
  obj4.ne = obj1;
  obj4.nl = obj;
  obj4.nn = obj;
  obj4.nnh = obj;
  obj4.no = obj;
  obj4.nqo = obj2;
  obj4.nr = obj;
  obj4.nso = obj;
  obj4.ny = obj;
  obj4.nyn = obj;
  obj4.om = obj;
  const obj42 = { cardinal: null, ordinal: null };
  const items83 = ["one", "other"];
  obj42.cardinal = items83;
  const items84 = ["one", "two", "few", "many", "other"];
  obj42.ordinal = items84;
  obj4.or = obj42;
  obj4.os = obj;
  obj4.osa = obj2;
  obj4.pa = obj;
  obj4.pap = obj;
  obj4.pcm = obj;
  const obj43 = { cardinal: null, ordinal: null };
  const items85 = ["one", "few", "many", "other"];
  obj43.cardinal = items85;
  const items86 = ["other"];
  obj43.ordinal = items86;
  obj4.pl = obj43;
  const obj44 = { cardinal: null, ordinal: null };
  const items87 = ["zero", "one", "other"];
  obj44.cardinal = items87;
  const items88 = ["other"];
  obj44.ordinal = items88;
  obj4.prg = obj44;
  obj4.ps = obj;
  const obj45 = { cardinal: null, ordinal: null };
  const items89 = ["one", "many", "other"];
  obj45.cardinal = items89;
  const items90 = ["other"];
  obj45.ordinal = items90;
  obj4.pt = obj45;
  const obj46 = { cardinal: null, ordinal: null };
  const items91 = ["one", "many", "other"];
  obj46.cardinal = items91;
  const items92 = ["other"];
  obj46.ordinal = items92;
  obj4.pt_PT = obj46;
  obj4.rm = obj;
  const obj47 = { cardinal: null, ordinal: null };
  const items93 = ["one", "few", "other"];
  obj47.cardinal = items93;
  const items94 = ["one", "other"];
  obj47.ordinal = items94;
  obj4.ro = obj47;
  obj4.rof = obj;
  const obj48 = { cardinal: null, ordinal: null };
  const items95 = ["one", "few", "many", "other"];
  obj48.cardinal = items95;
  const items96 = ["other"];
  obj48.ordinal = items96;
  obj4.ru = obj48;
  obj4.rwk = obj;
  obj4.sah = obj2;
  obj4.saq = obj;
  obj4.sat = obj3;
  const obj49 = { cardinal: null, ordinal: null };
  const items97 = ["one", "other"];
  obj49.cardinal = items97;
  const items98 = ["many", "other"];
  obj49.ordinal = items98;
  obj4.sc = obj49;
  const obj50 = { cardinal: null, ordinal: null };
  const items99 = ["one", "other"];
  obj50.cardinal = items99;
  const items100 = ["many", "other"];
  obj50.ordinal = items100;
  obj4.scn = obj50;
  obj4.sd = obj;
  obj4.sdh = obj;
  obj4.se = obj3;
  obj4.seh = obj;
  obj4.ses = obj2;
  obj4.sg = obj2;
  const obj51 = { cardinal: null, ordinal: null };
  const items101 = ["one", "few", "other"];
  obj51.cardinal = items101;
  const items102 = ["other"];
  obj51.ordinal = items102;
  obj4.sh = obj51;
  const obj52 = { cardinal: null, ordinal: null };
  const items103 = ["one", "few", "other"];
  obj52.cardinal = items103;
  const items104 = ["other"];
  obj52.ordinal = items104;
  obj4.shi = obj52;
  obj4.si = obj;
  const obj53 = { cardinal: null, ordinal: null };
  const items105 = ["one", "few", "many", "other"];
  obj53.cardinal = items105;
  const items106 = ["other"];
  obj53.ordinal = items106;
  obj4.sk = obj53;
  const obj54 = { cardinal: null, ordinal: null };
  const items107 = ["one", "two", "few", "other"];
  obj54.cardinal = items107;
  const items108 = ["other"];
  obj54.ordinal = items108;
  obj4.sl = obj54;
  obj4.sma = obj3;
  obj4.smi = obj3;
  obj4.smj = obj3;
  obj4.smn = obj3;
  obj4.sms = obj3;
  obj4.sn = obj;
  obj4.so = obj;
  const obj55 = { cardinal: null, ordinal: null };
  const items109 = ["one", "other"];
  obj55.cardinal = items109;
  const items110 = ["one", "many", "other"];
  obj55.ordinal = items110;
  obj4.sq = obj55;
  const obj56 = { cardinal: null, ordinal: null };
  const items111 = ["one", "few", "other"];
  obj56.cardinal = items111;
  const items112 = ["other"];
  obj56.ordinal = items112;
  obj4.sr = obj56;
  obj4.ss = obj;
  obj4.ssy = obj;
  obj4.st = obj;
  obj4.su = obj2;
  obj4.sv = obj1;
  obj4.sw = obj;
  obj4.syr = obj;
  obj4.ta = obj;
  obj4.te = obj;
  obj4.teo = obj;
  obj4.th = obj2;
  obj4.ti = obj;
  obj4.tig = obj;
  const obj57 = { cardinal: null, ordinal: null };
  const items113 = ["one", "other"];
  obj57.cardinal = items113;
  const items114 = ["few", "other"];
  obj57.ordinal = items114;
  obj4.tk = obj57;
  obj4.tl = obj1;
  obj4.tn = obj;
  obj4.to = obj2;
  obj4.tpi = obj2;
  obj4.tr = obj;
  obj4.ts = obj;
  obj4.tzm = obj;
  obj4.ug = obj;
  const obj58 = { cardinal: null, ordinal: null };
  const items115 = ["one", "few", "many", "other"];
  obj58.cardinal = items115;
  const items116 = ["few", "other"];
  obj58.ordinal = items116;
  obj4.uk = obj58;
  obj4.und = obj2;
  obj4.ur = obj;
  obj4.uz = obj;
  obj4.ve = obj;
  const obj59 = { cardinal: null, ordinal: null };
  const items117 = ["one", "many", "other"];
  obj59.cardinal = items117;
  const items118 = ["many", "other"];
  obj59.ordinal = items118;
  obj4.vec = obj59;
  const obj60 = { cardinal: null, ordinal: null };
  const items119 = ["other"];
  obj60.cardinal = items119;
  const items120 = ["one", "other"];
  obj60.ordinal = items120;
  obj4.vi = obj60;
  obj4.vo = obj;
  obj4.vun = obj;
  obj4.wa = obj;
  obj4.wae = obj;
  obj4.wo = obj2;
  obj4.xh = obj;
  obj4.xog = obj;
  obj4.yi = obj;
  obj4.yo = obj2;
  obj4.yue = obj2;
  obj4.zh = obj2;
  obj4.zu = obj;
  const _Object4 = Object;
  const frozen = Object.freeze(merged);
  let _default2 = obj4;
  if (obj4) {
    _default2 = obj4;
    if (obj4.__esModule) {
      const _Object5 = Object;
      const call2 = hasOwnProperty2.call;
      if (typeof call2 === "unknown") {
        let hasOwnProperty2Result = hasOwnProperty2("default");
      } else {
        hasOwnProperty2Result = call2(obj4, "default");
      }
      _default2 = obj4;
      if (hasOwnProperty2Result) {
        _default2 = obj4.default;
      }
    }
  }
  const merged1 = Object.assign({ default: null });
  merged1[0] = _default2;
  const items121 = [obj4];
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
  const obj61 = {
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
  let _default3 = obj61;
  if (obj61.__esModule) {
    const _Object8 = Object;
    const call3 = hasOwnProperty3.call;
    if (typeof call3 === "unknown") {
      let hasOwnProperty3Result = hasOwnProperty3("default");
    } else {
      hasOwnProperty3Result = call3(obj61, "default");
    }
    _default3 = obj61;
    if (hasOwnProperty3Result) {
      _default3 = obj61.default;
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
    const items122 = [obj61];
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