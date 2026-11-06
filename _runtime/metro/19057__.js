// === Module 19057: ? ===

// Module 19057
const uint8Array = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
const uint8Array1 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
const uint8Array2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
const uint8Array3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
let uint16Array = new Uint16Array(128);

export function stem(str) {
  if (str.length < 3) {
    return str;
  } else {
    if (str.length <= 6) {
      switch (str) {
        case "skis":
          return "ski";
        case "skies":
          return "sky";
        case "dying":
          return "die";
        case "lying":
          return "lie";
        case "tying":
          return "tie";
        case "idly":
          return "idl";
        case "gently":
          return "gentl";
        case "ugly":
          return "ugli";
        case "early":
          return "earli";
        case "only":
          return "onli";
        case "singly":
          return "singl";
        case "sky":
          return str;
        case "news":
          return str;
        case "howe":
          return str;
        case "atlas":
          return str;
        case "cosmos":
          return str;
        case "bias":
          return str;
        case "andes":
          return str;
      }
    }
    let num3 = 0;
    if (39 === str.charCodeAt(0)) {
      num3 = 1;
    }
    let diff = str.length - num3;
    if (diff >= uint16Array.length) {
      const _Uint16Array = Uint16Array;
      uint16Array = new Uint16Array(diff + 1);
    }
    let num9 = 0;
    if (0 < diff) {
      do {
        let charCodeAtResult = str.charCodeAt(num9 + num3);
        if (121 !== charCodeAtResult) {
          uint16Array[num9] = charCodeAtResult;
        } else if (0 === num9) {
          uint16Array[num9] = 89;
        } else {
          let _Math = Math;
        }
        num9 = num9 + 1;
      } while (num9 < diff);
    }
    const diff1 = diff - 1;
    if (39 === uint16Array[diff1]) {
      diff = diff1;
    }
    let tmp11 = diff >= 2;
    if (2 <= diff) {
      tmp11 = 39 === uint16Array[diff - 2];
    }
    if (tmp11) {
      tmp11 = 115 === uint16Array[diff - 1];
    }
    let diff2 = diff;
    if (tmp11) {
      diff2 = diff - 2;
    }
    let num12 = 0;
    if (0 < diff2) {
      const _Math2 = Math;
      let num13 = 0;
      num12 = 0;
      if (!uint8Array[Math.min(Math, uint16Array[0], 127)]) {
        const sum = num13 + 1;
        num12 = sum;
        while (sum < diff2) {
          let _Math3 = Math;
          num13 = sum;
          num12 = sum;
          if (uint8Array[Math.min(Math, uint16Array[sum], 127)]) {
            break;
          }
        }
      }
    }
    let sum1 = num12;
    if (num12 < diff2) {
      sum1 = num12 + 1;
    }
    let num14 = 5;
    if (5 <= diff2) {
      if (103 === uint16Array[0]) {
        if (101 === uint16Array[1]) {
          if (110 === uint16Array[2]) {
            if (101 === uint16Array[3]) {
              let num19 = num14;
            }
            let tmp22 = num19;
            if (num19 < diff2) {
              const _Math6 = Math;
              let tmp24 = num19;
              tmp22 = num19;
              if (!uint8Array[Math.min(Math, uint16Array[num19], 127)]) {
                const sum2 = tmp24 + 1;
                tmp22 = sum2;
                while (sum2 < diff2) {
                  let _Math7 = Math;
                  tmp24 = sum2;
                  tmp22 = sum2;
                  if (uint8Array[Math.min(Math, uint16Array[sum2], 127)]) {
                    break;
                  }
                }
              }
            }
            let tmp27 = tmp22;
            if (tmp22 < diff2) {
              const _Math8 = Math;
              let tmp29 = tmp22;
              tmp27 = tmp22;
              if (uint8Array[Math.min(Math, uint16Array[tmp22], 127)]) {
                const sum3 = tmp29 + 1;
                tmp27 = sum3;
                while (sum3 < diff2) {
                  let _Math9 = Math;
                  tmp29 = sum3;
                  tmp27 = sum3;
                  if (!uint8Array[Math.min(Math, uint16Array[sum3], 127)]) {
                    break;
                  }
                }
              }
            }
            let sum4 = tmp27;
            if (tmp27 < diff2) {
              sum4 = tmp27 + 1;
            }
            if (3 > diff2) {
              if (6 === diff2) {
                if (105 === uint16Array[0]) {
                  if (110 === uint16Array[1]) {
                    if (110 === uint16Array[2]) {
                      if (105 === uint16Array[3]) {
                        let str14 = "";
                        let str15 = "";
                        let num212 = 0;
                        if (0 < diff2) {
                          do {
                            let _String = String;
                            str14 = `${String.fromCharCode(tmp2[num212])}`;
                            num212 = num212 + 1;
                            str15 = str14;
                          } while (num212 < diff2);
                        }
                        return str15;
                      }
                    }
                  }
                }
                let num42 = 111;
                if (111 === uint16Array[0]) {
                  num42 = 117;
                  if (117 === uint16Array[1]) {
                    num42 = 116;
                  }
                }
                if (101 === uint16Array[0]) {
                  num42 = 120;
                  if (120 === uint16Array[1]) {
                    num42 = 99;
                  }
                }
              }
              if (7 === diff2) {
                num42 = 99;
              }
              let tmp42 = diff2;
              if (2 <= diff2) {
                tmp42 = diff2;
                if (121 === uint16Array[diff2 - 1]) {
                  const diff3 = diff2 - 2;
                  num42 = 108;
                  tmp42 = diff2;
                  if (108 === uint16Array[diff3]) {
                    tmp42 = diff3;
                  }
                }
              }
              let flag = false;
              let diff8 = diff2;
              if (3 > tmp42) {
                let tmp68 = tmp67;
                if (3 <= diff8) {
                  const diff4 = diff8 - 1;
                  tmp68 = 89 === uint16Array[diff4] || 121 === uint16Array[diff4];
                  const tmp70 = 89 === uint16Array[diff4] || 121 === uint16Array[diff4];
                }
                if (tmp68) {
                  const _Math15 = Math;
                  tmp68 = !uint8Array[Math.min(Math, uint16Array[diff8 - 2], 127)];
                }
                if (tmp68) {
                  uint16Array[diff8 - 1] = 105;
                  flag = true;
                }
                let flag5 = flag;
                let diff13 = diff8;
                if (num19 + 2 <= diff8) {
                  const diff5 = diff8 - 1;
                  if (108 === uint16Array[diff5]) {
                    const sum5 = num19 + 6;
                    let tmp127 = diff8 >= sum5;
                    if (sum5 <= diff8) {
                      tmp127 = 97 === uint16Array[diff8 - 2];
                    }
                    if (tmp127) {
                      tmp127 = 110 === uint16Array[diff8 - 3];
                    }
                    if (tmp127) {
                      tmp127 = 111 === uint16Array[diff8 - 4];
                    }
                    if (tmp127) {
                      tmp127 = 105 === uint16Array[diff8 - num14];
                    }
                    if (tmp127) {
                      tmp127 = 116 === uint16Array[diff8 - 6];
                    }
                    flag5 = flag;
                    diff13 = diff8;
                    if (tmp127) {
                      if (7 > diff8) {
                        let diff6 = diff8 - 2;
                      }
                      let tmp130 = diff8;
                      if (num19 + 7 <= diff8) {
                        const diff7 = diff8 - 4;
                        diff8 = diff7 - 1;
                        uint16Array[diff8] = 101;
                        flag = true;
                        tmp130 = diff7;
                      }
                      diff6 = tmp130;
                    }
                  } else if (110 === tmp209) {
                    const sum6 = num19 + num14;
                    let tmp122 = diff8 >= sum6;
                    if (sum6 <= diff8) {
                      tmp122 = 111 === uint16Array[diff8 - 2];
                    }
                    if (tmp122) {
                      tmp122 = 105 === uint16Array[diff8 - 3];
                    }
                    if (tmp122) {
                      tmp122 = 116 === uint16Array[diff8 - 4];
                    }
                    if (tmp122) {
                      tmp122 = 97 === uint16Array[diff8 - num14];
                    }
                    flag5 = flag;
                    diff13 = diff8;
                    if (tmp122) {
                      if (7 <= diff8) {
                        if (122 === uint16Array[diff8 - 6]) {
                          if (105 === uint16Array[diff8 - 7]) {
                            let flag12 = flag;
                            let tmp124 = diff8;
                            if (num19 + 7 <= diff8) {
                              const diff9 = diff8 - 4;
                              uint16Array[diff9 - 1] = 101;
                              flag12 = true;
                              tmp124 = diff9;
                            }
                            let flag11 = flag12;
                            let diff10 = tmp124;
                          }
                          flag5 = flag11;
                          diff13 = diff10;
                        }
                      }
                      diff10 = diff8 - 2;
                      uint16Array[diff10 - 1] = 101;
                      flag11 = true;
                    }
                  } else if (114 === tmp209) {
                    flag5 = flag;
                    diff13 = diff8;
                    if (num19 + 4 <= diff8) {
                      const diff11 = diff8 - 2;
                      if (101 === uint16Array[diff11]) {
                        let tmp119 = 122 === uint16Array[diff8 - 3];
                        if (tmp119) {
                          tmp119 = 105 === uint16Array[diff8 - 4];
                        }
                        let tmp120 = diff8;
                        if (tmp119) {
                          tmp120 = diff5;
                        }
                        let tmp118 = tmp120;
                        let flag10 = flag;
                      } else {
                        let tmp117 = 111 === uint16Array[diff11];
                        if (tmp117) {
                          tmp117 = 116 === uint16Array[diff8 - 3];
                        }
                        if (tmp117) {
                          tmp117 = 97 === uint16Array[diff8 - 4];
                        }
                        flag10 = flag;
                        tmp118 = diff8;
                        if (tmp117) {
                          uint16Array[diff5 - 1] = 101;
                          flag10 = true;
                          tmp118 = diff5;
                        }
                      }
                      flag5 = flag10;
                      diff13 = tmp118;
                    }
                  } else if (115 === tmp209) {
                    const sum7 = num19 + 7;
                    let tmp112 = diff8 >= sum7;
                    if (sum7 <= diff8) {
                      tmp112 = 115 === uint16Array[diff8 - 2];
                    }
                    if (tmp112) {
                      tmp112 = 101 === uint16Array[diff8 - 3];
                    }
                    if (tmp112) {
                      tmp112 = 110 === uint16Array[diff8 - 4];
                    }
                    if (tmp112) {
                      const diff12 = diff8 - num14;
                      let tmp114 = 108 === uint16Array[diff12];
                      if (tmp114) {
                        tmp114 = 117 === uint16Array[diff8 - 6];
                      }
                      if (tmp114) {
                        tmp114 = 102 === uint16Array[diff8 - 7];
                      }
                      if (!tmp114) {
                        let tmp115 = 115 === uint16Array[diff12];
                        if (tmp115) {
                          tmp115 = 117 === uint16Array[diff8 - 6];
                        }
                        if (tmp115) {
                          tmp115 = 111 === uint16Array[diff8 - 7];
                        }
                        tmp114 = tmp115;
                      }
                      if (!tmp114) {
                        let tmp116 = 101 === uint16Array[diff12];
                        if (tmp116) {
                          tmp116 = 118 === uint16Array[diff8 - 6];
                        }
                        if (tmp116) {
                          tmp116 = 105 === uint16Array[diff8 - 7];
                        }
                        tmp114 = tmp116;
                      }
                      tmp112 = tmp114;
                    }
                    flag5 = flag;
                    diff13 = diff8;
                    if (tmp112) {
                      diff13 = diff8 - 4;
                      flag5 = flag;
                    }
                  } else if (109 === tmp209) {
                    const sum8 = num19 + num14;
                    let tmp110 = diff8 >= sum8;
                    if (sum8 <= diff8) {
                      tmp110 = 115 === uint16Array[diff8 - 2];
                    }
                    if (tmp110) {
                      tmp110 = 105 === uint16Array[diff8 - 3];
                    }
                    if (tmp110) {
                      tmp110 = 108 === uint16Array[diff8 - 4];
                    }
                    if (tmp110) {
                      tmp110 = 97 === uint16Array[diff8 - num14];
                    }
                    flag5 = flag;
                    diff13 = diff8;
                    if (tmp110) {
                      diff13 = diff8 - 3;
                      flag5 = flag;
                    }
                  } else {
                    flag5 = flag;
                    diff13 = diff8;
                    if (105 === tmp209) {
                      const diff14 = diff8 - 2;
                      if (99 === uint16Array[diff14]) {
                        const sum9 = num19 + 4;
                        let tmp106 = diff8 >= sum9;
                        if (sum9 <= diff8) {
                          const diff15 = diff8 - 4;
                          let tmp108 = 101 === uint16Array[diff15];
                          if (!tmp108) {
                            tmp108 = 97 === uint16Array[diff15];
                          }
                          tmp106 = tmp108;
                        }
                        if (tmp106) {
                          tmp106 = 110 === uint16Array[diff8 - 3];
                        }
                        flag5 = flag;
                        diff13 = diff8;
                        if (tmp106) {
                          uint16Array[diff5] = 101;
                          flag5 = true;
                          diff13 = diff8;
                        }
                      } else if (103 === uint16Array[diff14]) {
                        const sum10 = num19 + 3;
                        let tmp104 = diff8 >= sum10;
                        if (sum10 <= diff8) {
                          tmp104 = diff8 >= 4;
                        }
                        if (tmp104) {
                          tmp104 = 103 === uint16Array[diff14];
                        }
                        if (tmp104) {
                          tmp104 = 111 === uint16Array[diff8 - 3];
                        }
                        if (tmp104) {
                          tmp104 = 108 === uint16Array[diff8 - 4];
                        }
                        flag5 = flag;
                        diff13 = diff8;
                        if (tmp104) {
                          flag5 = flag;
                          diff13 = diff5;
                        }
                      } else if (116 === uint16Array[diff14]) {
                        const sum11 = num19 + num14;
                        let tmp92 = diff8 >= sum11;
                        if (sum11 <= diff8) {
                          tmp92 = 105 === uint16Array[diff8 - 3];
                        }
                        flag5 = flag;
                        diff13 = diff8;
                        if (tmp92) {
                          const diff16 = diff8 - 4;
                          if (108 === uint16Array[diff16]) {
                            if (6 <= diff8) {
                              let flag9 = flag;
                              let tmp99 = diff8;
                              if (num19 + 6 <= diff8) {
                                const diff17 = diff8 - 3;
                                uint16Array[diff17 - 2] = 108;
                                uint16Array[diff17 - 1] = 101;
                                flag9 = true;
                                tmp99 = diff17;
                              }
                              let diff18 = tmp99;
                            }
                            let tmp96 = 108 === uint16Array[diff16];
                            if (tmp96) {
                              tmp96 = 97 === uint16Array[diff8 - num14];
                            }
                            diff18 = diff8;
                            if (tmp96) {
                              diff18 = diff8 - 3;
                            }
                          } else {
                            let flag8 = flag;
                            let tmp95 = diff8;
                            if (tmp94) {
                              uint16Array[diff14 - 1] = 101;
                              flag8 = true;
                              tmp95 = diff14;
                            }
                            flag5 = flag8;
                            diff13 = tmp95;
                            tmp94 = 118 === uint16Array[diff16] && 105 === uint16Array[diff8 - num14];
                          }
                        }
                      } else {
                        flag5 = flag;
                        diff13 = diff8;
                        if (tmp73) {
                          const diff19 = diff8 - 3;
                          if (98 === uint16Array[diff19]) {
                            let num98 = 4;
                            if (4 > diff8) {
                              let flag6 = flag;
                              if (num19 + 3 <= diff8) {
                                uint16Array[diff5] = 101;
                                flag6 = true;
                              }
                            }
                            num98 = num19 + num98;
                            let flag7 = flag;
                            if (num98 <= diff8) {
                              num98 = 101;
                              uint16Array[diff5] = 101;
                              flag7 = true;
                            }
                            flag6 = flag7;
                          } else if (108 === uint16Array[diff19]) {
                            if (num14 <= diff8) {
                            }
                            const sum12 = num19 + 4;
                            let tmp84 = diff8 >= sum12;
                            if (sum12 <= diff8) {
                              tmp84 = 97 === uint16Array[diff8 - 4];
                            }
                          } else if (115 === uint16Array[diff19]) {
                            if (6 <= diff8) {
                              if (115 === uint16Array[diff8 - 4]) {
                              }
                            }
                            const sum13 = num19 + num14;
                            let tmp79 = diff8 >= sum13;
                            if (sum13 <= diff8) {
                              tmp79 = 117 === uint16Array[diff8 - 4];
                            }
                            if (tmp79) {
                              tmp79 = 111 === uint16Array[diff8 - num14];
                            }
                          } else {
                            if (num14 <= diff8) {
                              if (116 === uint16Array[diff19]) {
                                if (110 === uint16Array[diff8 - 4]) {
                                  if (101 === uint16Array[diff8 - num14]) {
                                    let tmp77 = diff8;
                                    if (num19 + num14 <= diff8) {
                                      tmp77 = diff14;
                                    }
                                    let tmp76 = tmp77;
                                  }
                                  flag5 = flag;
                                  diff13 = tmp76;
                                }
                              }
                            }
                            const _Math16 = Math;
                            tmp76 = diff8;
                            if (uint8Array2[Math.min(Math, uint16Array[diff19], 127)]) {
                              tmp76 = diff14;
                            }
                          }
                        }
                        tmp73 = 108 === uint16Array[diff14] && tmp67;
                      }
                    }
                  }
                }
                let tmp134 = flag5;
                let diff21 = diff13;
                if (num19 + 3 <= diff13) {
                  if (108 === uint16Array[diff13 - 1]) {
                    const diff20 = diff13 - 3;
                    if (99 === uint16Array[diff20]) {
                      const sum14 = num19 + 4;
                      let tmp152 = diff13 >= sum14;
                      if (sum14 <= diff13) {
                        tmp152 = 105 === uint16Array[diff13 - 4];
                      }
                      if (tmp152) {
                        tmp152 = 97 === uint16Array[diff13 - 2];
                      }
                      tmp134 = flag5;
                      diff21 = diff13;
                      if (tmp152) {
                        diff21 = diff13 - 2;
                        tmp134 = flag5;
                      }
                    } else if (102 === uint16Array[diff20]) {
                      tmp134 = flag5;
                      diff21 = diff13;
                      if (117 === uint16Array[diff13 - 2]) {
                        tmp134 = flag5;
                        diff21 = diff20;
                      }
                    } else {
                      let tmp146 = 110 === uint16Array[diff20] && diff13 >= num19 + 6;
                      if (tmp146) {
                        tmp146 = 97 === uint16Array[diff13 - 2];
                      }
                      if (tmp146) {
                        tmp146 = 111 === uint16Array[diff13 - 4];
                      }
                      if (tmp146) {
                        tmp146 = 105 === uint16Array[diff13 - num14];
                      }
                      if (tmp146) {
                        tmp146 = 116 === uint16Array[diff13 - 6];
                      }
                      tmp134 = flag5;
                      diff21 = diff13;
                      if (tmp146) {
                        if (7 <= diff13) {
                          if (97 === uint16Array[diff13 - 7]) {
                            let flag13 = flag5;
                            let tmp149 = diff13;
                            if (num19 + 7 <= diff13) {
                              const diff22 = diff13 - 4;
                              uint16Array[diff22 - 1] = 101;
                              flag13 = true;
                              tmp149 = diff22;
                            }
                            let tmp148 = flag13;
                            let diff23 = tmp149;
                          }
                          tmp134 = tmp148;
                          diff21 = diff23;
                        }
                        diff23 = diff13 - 2;
                        tmp148 = flag5;
                      }
                    }
                  } else if (101 === tmp212) {
                    const diff24 = diff13 - 2;
                    if (122 === uint16Array[diff24]) {
                      const sum15 = num19 + num14;
                      let tmp144 = diff13 >= sum15;
                      if (sum15 <= diff13) {
                        tmp144 = 105 === uint16Array[diff13 - 3];
                      }
                      if (tmp144) {
                        tmp144 = 108 === uint16Array[diff13 - 4];
                      }
                      if (tmp144) {
                        tmp144 = 97 === uint16Array[diff13 - num14];
                      }
                      tmp134 = flag5;
                      diff21 = diff13;
                      if (tmp144) {
                        diff21 = diff13 - 3;
                        tmp134 = flag5;
                      }
                    } else if (116 === uint16Array[diff24]) {
                      const sum16 = num19 + num14;
                      let tmp142 = diff13 >= sum16;
                      if (sum16 <= diff13) {
                        tmp142 = 97 === uint16Array[diff13 - 3];
                      }
                      if (tmp142) {
                        tmp142 = 99 === uint16Array[diff13 - 4];
                      }
                      if (tmp142) {
                        tmp142 = 105 === uint16Array[diff13 - num14];
                      }
                      tmp134 = flag5;
                      diff21 = diff13;
                      if (tmp142) {
                        diff21 = diff13 - 3;
                        tmp134 = flag5;
                      }
                    } else {
                      let tmp140 = 118 === uint16Array[diff24] && diff13 >= sum4 + num14;
                      if (tmp140) {
                        tmp140 = 105 === uint16Array[diff13 - 3];
                      }
                      if (tmp140) {
                        tmp140 = 116 === uint16Array[diff13 - 4];
                      }
                      if (tmp140) {
                        tmp140 = 97 === uint16Array[diff13 - num14];
                      }
                      tmp134 = flag5;
                      diff21 = diff13;
                      if (tmp140) {
                        diff21 = diff13 - num14;
                        tmp134 = flag5;
                      }
                    }
                  } else if (105 === tmp212) {
                    const sum17 = num19 + num14;
                    let tmp138 = diff13 >= sum17;
                    if (sum17 <= diff13) {
                      tmp138 = 116 === uint16Array[diff13 - 2];
                    }
                    if (tmp138) {
                      tmp138 = 105 === uint16Array[diff13 - 3];
                    }
                    if (tmp138) {
                      tmp138 = 99 === uint16Array[diff13 - 4];
                    }
                    if (tmp138) {
                      tmp138 = 105 === uint16Array[diff13 - num14];
                    }
                    tmp134 = flag5;
                    diff21 = diff13;
                    if (tmp138) {
                      diff21 = diff13 - 3;
                      tmp134 = flag5;
                    }
                  } else {
                    tmp134 = flag5;
                    diff21 = diff13;
                    if (115 === tmp212) {
                      const sum18 = num19 + 4;
                      let tmp136 = diff13 >= sum18;
                      if (sum18 <= diff13) {
                        tmp136 = 115 === uint16Array[diff13 - 2];
                      }
                      if (tmp136) {
                        tmp136 = 101 === uint16Array[diff13 - 3];
                      }
                      if (tmp136) {
                        tmp136 = 110 === uint16Array[diff13 - 4];
                      }
                      tmp134 = flag5;
                      diff21 = diff13;
                      if (tmp136) {
                        diff21 = diff13 - 4;
                        tmp134 = flag5;
                      }
                    }
                  }
                }
                let diff26 = diff21;
                if (sum4 + 2 <= diff21) {
                  if (110 === uint16Array[diff21 - 1]) {
                    const sum19 = sum4 + 3;
                    let tmp187 = diff21 >= sum19;
                    if (sum19 <= diff21) {
                      tmp187 = 111 === uint16Array[diff21 - 2];
                    }
                    if (tmp187) {
                      tmp187 = 105 === uint16Array[diff21 - 3];
                    }
                    if (tmp187) {
                      const diff25 = diff21 - 4;
                      let tmp189 = 115 === uint16Array[diff25];
                      if (!tmp189) {
                        tmp189 = 116 === uint16Array[diff25];
                      }
                      tmp187 = tmp189;
                    }
                    diff26 = diff21;
                    if (tmp187) {
                      diff26 = diff21 - 3;
                    }
                  } else if (108 === tmp214) {
                    const diff27 = diff21 - 2;
                    diff26 = diff21;
                    if (97 === uint16Array[diff27]) {
                      diff26 = diff27;
                    }
                  } else if (114 === tmp214) {
                    const diff28 = diff21 - 2;
                    diff26 = diff21;
                    if (101 === uint16Array[diff28]) {
                      diff26 = diff28;
                    }
                  } else if (99 === tmp214) {
                    const diff29 = diff21 - 2;
                    diff26 = diff21;
                    if (105 === uint16Array[diff29]) {
                      diff26 = diff29;
                    }
                  } else {
                    let num193 = 109;
                    if (109 === tmp214) {
                      const sum20 = sum4 + 3;
                      let tmp182 = diff21 >= sum20;
                      if (sum20 <= diff21) {
                        tmp182 = 115 === uint16Array[diff21 - 2];
                      }
                      if (tmp182) {
                        tmp182 = 105 === uint16Array[diff21 - 3];
                      }
                      diff26 = diff21;
                      if (tmp182) {
                        diff26 = diff21 - 3;
                      }
                    } else if (105 === tmp214) {
                      const sum21 = sum4 + 3;
                      let tmp180 = diff21 >= sum21;
                      if (sum21 <= diff21) {
                        tmp180 = 116 === uint16Array[diff21 - 2];
                      }
                      if (tmp180) {
                        tmp180 = 105 === uint16Array[diff21 - 3];
                      }
                      diff26 = diff21;
                      if (tmp180) {
                        diff26 = diff21 - 3;
                      }
                    } else if (115 === tmp214) {
                      const sum22 = sum4 + 3;
                      let tmp178 = diff21 >= sum22;
                      if (sum22 <= diff21) {
                        tmp178 = 117 === uint16Array[diff21 - 2];
                      }
                      if (tmp178) {
                        tmp178 = 111 === uint16Array[diff21 - 3];
                      }
                      diff26 = diff21;
                      if (tmp178) {
                        diff26 = diff21 - 3;
                      }
                    } else if (116 === tmp214) {
                      const sum23 = sum4 + 3;
                      let tmp168 = diff21 >= sum23;
                      if (sum23 <= diff21) {
                        tmp168 = 110 === uint16Array[diff21 - 2];
                      }
                      diff26 = diff21;
                      if (tmp168) {
                        const diff30 = diff21 - 3;
                        let tmp170 = diff30;
                        if (97 !== uint16Array[diff30]) {
                          let tmp171 = diff21;
                          if (101 === uint16Array[diff30]) {
                            let tmp172 = diff30;
                            if (4 <= diff21) {
                              const diff31 = diff21 - 4;
                              tmp172 = diff30;
                              if (num193 === uint16Array[diff31]) {
                                if (num14 > diff21) {
                                } else {
                                  num193 = diff21 - num14;
                                }
                                const sum24 = sum4 + num14;
                                num14 = diff21;
                                if (sum24 <= diff21) {
                                  num14 = num193;
                                }
                              }
                            }
                            tmp171 = tmp172;
                          }
                          tmp170 = tmp171;
                        }
                        diff26 = tmp170;
                      }
                    } else {
                      diff26 = diff21;
                      if (101 === tmp214) {
                        const diff32 = diff21 - 2;
                        if (99 === uint16Array[diff32]) {
                          const sum25 = sum4 + 4;
                          let tmp164 = diff21 >= sum25;
                          if (sum25 <= diff21) {
                            tmp164 = 110 === uint16Array[diff21 - 3];
                          }
                          if (tmp164) {
                            const diff33 = diff21 - 4;
                            tmp164 = 97 === uint16Array[diff33] || 101 === uint16Array[diff33];
                            const tmp166 = 97 === uint16Array[diff33] || 101 === uint16Array[diff33];
                          }
                          diff26 = diff21;
                          if (tmp164) {
                            diff26 = diff21 - 4;
                          }
                        } else if (108 === uint16Array[diff32]) {
                          const sum26 = sum4 + 4;
                          let tmp160 = diff21 >= sum26;
                          if (sum26 <= diff21) {
                            tmp160 = 98 === uint16Array[diff21 - 3];
                          }
                          if (tmp160) {
                            const diff34 = diff21 - 4;
                            tmp160 = 97 === uint16Array[diff34] || 105 === uint16Array[diff34];
                            const tmp162 = 97 === uint16Array[diff34] || 105 === uint16Array[diff34];
                          }
                          diff26 = diff21;
                          if (tmp160) {
                            diff26 = diff21 - 4;
                          }
                        } else if (116 === uint16Array[diff32]) {
                          const sum27 = sum4 + 3;
                          let tmp158 = diff21 >= sum27;
                          if (sum27 <= diff21) {
                            tmp158 = 97 === uint16Array[diff21 - 3];
                          }
                          diff26 = diff21;
                          if (tmp158) {
                            diff26 = diff21 - 3;
                          }
                        } else {
                          const sum28 = sum4 + 3;
                          let tmp155 = diff21 >= sum28;
                          if (sum28 <= diff21) {
                            let tmp156 = 118 === uint16Array[diff32];
                            if (!tmp156) {
                              tmp156 = 122 === uint16Array[diff32];
                            }
                            tmp155 = tmp156;
                          }
                          if (tmp155) {
                            tmp155 = 105 === uint16Array[diff21 - 3];
                          }
                          diff26 = diff21;
                          if (tmp155) {
                            diff26 = diff21 - 3;
                          }
                        }
                      }
                    }
                  }
                }
                const sum29 = num19 + 1;
                let tmp191 = diff26 >= sum29;
                if (sum29 <= diff26) {
                  const sum30 = sum4 + 1;
                  let tmp202 = diff26 >= sum30;
                  let tmp192 = tmp202;
                  if (sum30 <= diff26) {
                    tmp192 = 108 === uint16Array[diff26 - 1];
                  }
                  if (tmp192) {
                    tmp192 = 108 === uint16Array[diff26 - 2];
                  }
                  if (!tmp192) {
                    const diff35 = diff26 - 1;
                    let tmp194 = 101 === uint16Array[diff35];
                    if (tmp194) {
                      if (sum30 > diff26) {
                        let tmp196 = diff35 >= 2;
                        if (2 <= diff35) {
                          const _Math17 = Math;
                          tmp196 = uint8Array[Math.min(Math, uint16Array[diff35 - 2], 127)];
                        }
                        if (tmp196) {
                          let tmp197 = 2 === diff35;
                          if (2 === diff35) {
                            const _Math18 = Math;
                            tmp197 = !uint8Array[Math.min(Math, uint16Array[diff35 - 1], 127)];
                          }
                          if (!tmp197) {
                            let tmp199 = diff35 >= 3;
                            if (3 <= diff35) {
                              const _Math19 = Math;
                              tmp199 = !uint8Array[Math.min(Math, uint16Array[diff35 - 3], 127)];
                            }
                            if (tmp199) {
                              const _Math20 = Math;
                              tmp199 = !uint8Array1[Math.min(Math, uint16Array[diff35 - 1], 127)];
                            }
                            tmp197 = tmp199;
                          }
                          tmp196 = tmp197;
                        }
                        tmp202 = !tmp196;
                      }
                      tmp194 = tmp202;
                    }
                    tmp192 = tmp194;
                  }
                  tmp191 = tmp192;
                }
                let diff36 = diff26;
                if (tmp191) {
                  diff36 = diff26 - 1;
                }
                if (tmp134) {
                  let str12 = "";
                  let num210 = 0;
                  let str13 = "";
                  if (0 < diff36) {
                    do {
                      let num211 = 121;
                      if (89 !== uint16Array[num210]) {
                        num211 = uint16Array[num210];
                      }
                      str12 = str12 + String.fromCharCode(num211);
                      num210 = num210 + 1;
                      str13 = str12;
                    } while (num210 < diff36);
                  }
                  return str13;
                } else {
                  return str.slice(num3, num3 + diff36);
                }
              } else {
                const diff37 = tmp42 - 3;
                if (101 === uint16Array[diff37]) {
                  if (101 === uint16Array[tmp42 - 2]) {
                    num42 = tmp42 - 1;
                  }
                  let flag2 = false;
                }
                const diff38 = tmp42 - 2;
                if (101 !== uint16Array[diff38]) {
                  let num73 = -1;
                  if (105 === uint16Array[diff37]) {
                    num73 = -1;
                    if (110 === uint16Array[diff38]) {
                      num73 = -1;
                      if (103 === uint16Array[tmp42 - 1]) {
                        num73 = diff37;
                      }
                    }
                  }
                } else {
                  num73 = diff38;
                }
                let tmp46 = num73 >= 0;
                if (0 <= num73) {
                  tmp46 = sum1 <= num73;
                }
                let tmp47 = diff2;
                if (tmp46) {
                  tmp46 = num73 >= 2;
                  tmp47 = num73;
                }
                flag2 = false;
                if (tmp46) {
                  const diff39 = tmp47 - 1;
                  if (116 !== uint16Array[diff39]) {
                    if (108 !== uint16Array[diff39]) {
                      if (122 !== uint16Array[diff39]) {
                        const diff40 = tmp47 - 2;
                        if (uint16Array[diff40] !== uint16Array[diff39]) {
                          let tmp53 = num19 >= tmp47;
                          if (tmp47 <= num19) {
                            let tmp55 = tmp47 >= 2;
                            if (2 <= tmp47) {
                              const _Math11 = Math;
                              tmp55 = uint8Array[Math.min(Math, uint16Array[diff40], 127)];
                            }
                            if (tmp55) {
                              let tmp56 = 2 === tmp47;
                              if (2 === tmp47) {
                                const _Math12 = Math;
                                tmp56 = !uint8Array[Math.min(Math, uint16Array[diff39], 127)];
                              }
                              if (!tmp56) {
                                let tmp58 = tmp47 >= 3;
                                if (3 <= tmp47) {
                                  const _Math13 = Math;
                                  tmp58 = !uint8Array[Math.min(Math, uint16Array[tmp47 - 3], 127)];
                                }
                                if (tmp58) {
                                  const _Math14 = Math;
                                  tmp58 = !uint8Array1[Math.min(Math, uint16Array[diff39], 127)];
                                }
                                tmp56 = tmp58;
                              }
                              tmp55 = tmp56;
                            }
                            tmp53 = tmp55;
                          }
                          let flag4 = false;
                          let sum31 = tmp47;
                          if (tmp53) {
                            uint16Array[tmp47] = 101;
                            sum31 = tmp47 + 1;
                            flag4 = true;
                          }
                          let flag3 = flag4;
                          let sum32 = sum31;
                        } else {
                          const _Math10 = Math;
                          flag3 = false;
                          sum32 = diff39;
                        }
                      }
                    }
                  }
                  uint16Array[tmp47] = 101;
                  sum32 = tmp47 + 1;
                  flag3 = true;
                }
              }
            } else {
              const diff41 = diff2 - 1;
              if (115 === uint16Array[diff41]) {
                if (4 <= diff2) {
                  const diff42 = diff2 - 2;
                  if (101 === uint16Array[diff42]) {
                    if (115 === uint16Array[diff2 - 3]) {
                      if (115 === uint16Array[diff2 - 4]) {
                        let diff45 = diff42;
                      }
                    }
                  }
                }
                const diff43 = diff2 - 2;
                if (101 !== uint16Array[diff43]) {
                  let diff44 = diff2;
                  if (tmp38) {
                    diff44 = diff41;
                  }
                  tmp38 = 117 !== uint16Array[diff43] && 115 !== uint16Array[diff43] && sum1 < diff41;
                }
                let num39 = 1;
                if (num14 <= diff2) {
                  num39 = 2;
                }
                diff44 = diff2 - num39;
              } else {
                let tmp34 = 100 === uint16Array[diff41];
                if (tmp34) {
                  tmp34 = 101 === uint16Array[diff2 - 2];
                }
                if (tmp34) {
                  tmp34 = 105 === uint16Array[diff2 - 3];
                }
                diff45 = diff2;
                if (tmp34) {
                  let num33 = 1;
                  if (num14 <= diff2) {
                    num33 = 2;
                  }
                  diff45 = diff2 - num33;
                }
              }
            }
          }
        }
      }
      if (97 === uint16Array[0]) {
        if (114 === uint16Array[1]) {
          if (115 === uint16Array[2]) {
            if (101 === uint16Array[3]) {
              num19 = num14;
            }
          }
        }
      }
    }
    if (6 <= diff2) {
      if (99 === uint16Array[0]) {
        if (111 === uint16Array[1]) {
          if (109 === uint16Array[2]) {
            if (109 === uint16Array[3]) {
              if (117 === uint16Array[4]) {
                num19 = 6;
              }
            }
          }
        }
      }
    }
    let tmp17 = sum1;
    if (sum1 < diff2) {
      const _Math4 = Math;
      let tmp19 = sum1;
      tmp17 = sum1;
      if (uint8Array[Math.min(Math, uint16Array[sum1], 127)]) {
        const sum33 = tmp19 + 1;
        tmp17 = sum33;
        while (sum33 < diff2) {
          let _Math5 = Math;
          tmp19 = sum33;
          tmp17 = sum33;
          if (!uint8Array[Math.min(Math, uint16Array[sum33], 127)]) {
            break;
          }
        }
      }
    }
    num19 = tmp17;
    if (tmp17 < diff2) {
      num19 = tmp17 + 1;
    }
  }
}