// _runtime/12684_consumeB.js
import _mod12657 from "metro/12657__.js";

function consumeB(type, arg1, fn) {
  let tmp = arg1;
  if (null !== type) {
    let tmp3 = arg1;
    if (type.type === WhiteSpace) {
      const sum = tmp3 + 1;
      const tmp6 = fn(sum);
      tmp = sum;
      while (null !== tmp6) {
        tmp3 = sum;
        if (tmp6.type === WhiteSpace) {
          continue;
        } else {
          tmp3 = sum;
          tmp = sum;
          if (tmp6.type !== Comment) {
            break;
          }
        }
        continue;
      }
    } else {
      tmp3 = arg1;
      tmp = arg1;
    }
  }
  const iter = fn(tmp);
  if (null === iter) {
    return arg1;
  } else {
    let tmp26 = tmp;
    let flag = false;
    let iter2 = iter;
    if (iter.type !== Number) {
      let tmp13 = null !== iter;
      let tmp10 = tmp13;
      if (tmp13) {
        tmp10 = iter.type === Delim;
      }
      if (tmp10) {
        value = iter.value;
        tmp10 = value.charCodeAt(0) === 43;
      }
      if (!tmp10) {
        if (tmp13) {
          tmp13 = iter.type === Delim;
        }
        if (tmp13) {
          value2 = iter.value;
          tmp13 = value2.charCodeAt(0) === c8;
        }
        if (!tmp13) {
          return arg1;
        }
      }
      const sum1 = tmp + 1;
      const tmp15 = fn(sum1);
      let tmp16 = sum1;
      if (null !== tmp15) {
        let tmp18 = sum1;
        if (tmp15.type === WhiteSpace) {
          const sum2 = tmp18 + 1;
          const tmp21 = fn(sum2);
          tmp16 = sum2;
          while (null !== tmp21) {
            tmp18 = sum2;
            if (tmp21.type === WhiteSpace) {
              continue;
            } else {
              tmp18 = sum2;
              tmp16 = sum2;
              if (tmp21.type !== Comment) {
                break;
              }
            }
            continue;
          }
        } else {
          tmp18 = sum1;
          tmp16 = sum1;
        }
      }
      const tmp24 = fn(tmp16);
      tmp26 = tmp16;
      flag = true;
      iter2 = tmp24;
      if (null === tmp24) {
        tmp26 = tmp16;
        flag = true;
        iter2 = tmp24;
        if (tmp24.type !== tmp37) {
          return 0;
        }
      }
    }
    if (!flag) {
      value3 = iter2.value;
      const charCodeAtResult = value3.charCodeAt(0);
      if (43 !== charCodeAtResult) {
        if (charCodeAtResult !== c8) {
          return 0;
        }
      }
    }
    let num7 = 1;
    if (flag) {
      num7 = 0;
    }
    let num8 = 0;
    if (iter2) {
      value4 = iter2.value;
      if (43 === charCodeAtResult1) {
        num8 = 0;
        if (!flag) {
          let sum3 = num7 + 1;
        }
      } else {
        sum3 = num7;
      }
      if (sum3 >= iter2.value.length) {
        num8 = tmp26 + 1;
      } else {
        _mod12657;
        const value5 = iter2.value;
        num8 = 0;
        while (tmp35(value5.charCodeAt(sum3))) {
          sum3 = sum3 + 1;
          break;
        }
      }
      charCodeAtResult1 = value4.charCodeAt(num7);
    }
    return num8;
  }
}
const Delim = _mod12657.TYPE.Delim;
const WhiteSpace = _mod12657.TYPE.WhiteSpace;
const Comment = _mod12657.TYPE.Comment;
const Ident = _mod12657.TYPE.Ident;
const Number = _mod12657.TYPE.Number;
const Dimension = _mod12657.TYPE.Dimension;
let c8 = 45;
let c9 = true;

export default function anPlusB(type, fn) {
  if (type) {
    if (type.type === Number) {
      let num43 = 0;
      if (type) {
        value2 = type.value;
        if (43 === charCodeAtResult) {
          let num45 = 1;
        } else {
          num45 = 0;
        }
        num43 = 1;
        if (num45 < type.value.length) {
          _mod12657;
          value3 = type.value;
          num43 = 0;
          while (tmp98(value3.charCodeAt(num45))) {
            let sum = num45 + 1;
            num45 = sum;
            num43 = 1;
            if (sum >= type.value.length) {
              break;
            }
          }
        }
        charCodeAtResult = value2.charCodeAt(0);
      }
      return num43;
    } else {
      if (type.type === Ident) {
        value = type.value;
        if (value.charCodeAt(0) === c8) {
          if (obj2.cmpChar(type.value, 1, 110)) {
            if (2 === type.value.length) {
              return consumeB(fn(1), 1, fn);
            } else {
              let num33 = 3;
              if (3 === length2) {
                value4 = type.value;
                let num36 = 0;
                if (value4.charCodeAt(2) === c8) {
                  const tmp117 = fn(1);
                  let num38 = 1;
                  if (null !== tmp117) {
                    let num37 = 1;
                    if (tmp117.type === WhiteSpace) {
                      const sum1 = num37 + 1;
                      const tmp80 = fn(sum1);
                      num38 = sum1;
                      while (null !== tmp80) {
                        num37 = sum1;
                        if (tmp80.type === WhiteSpace) {
                          continue;
                        } else {
                          num37 = sum1;
                          num38 = sum1;
                          if (tmp80.type !== Comment) {
                            break;
                          }
                        }
                        continue;
                      }
                    } else {
                      num37 = 1;
                      num38 = 1;
                    }
                  }
                  const iter4 = fn(num38);
                  let num39 = 0;
                  if (iter4) {
                    const value5 = iter4.value;
                    if (43 === charCodeAtResult1) {
                      let num41 = 1;
                      num39 = 0;
                    } else {
                      num41 = 0;
                    }
                    if (num41 >= iter4.value.length) {
                      num39 = num38 + 1;
                    } else {
                      _mod12657;
                      const value6 = iter4.value;
                      num39 = 0;
                      while (tmp90(value6.charCodeAt(num41))) {
                        num41 = num41 + 1;
                        break;
                      }
                    }
                    charCodeAtResult1 = value5.charCodeAt(0);
                  }
                  num36 = num39;
                }
                return num36;
              } else {
                const value7 = type.value;
                let num35 = 0;
                if (value7.charCodeAt(2) === c8) {
                  let num34 = 0;
                  if (type) {
                    const value8 = type.value;
                    if (43 === charCodeAtResult2) {
                      num33 = 4;
                      num34 = 0;
                    }
                    num34 = 1;
                    if (num33 < type.value.length) {
                      _mod12657;
                      const value9 = type.value;
                      num34 = 0;
                      while (tmp74(value9.charCodeAt(num33))) {
                        let sum2 = num33 + 1;
                        num33 = sum2;
                        num34 = 1;
                        if (sum2 >= type.value.length) {
                          break;
                        }
                      }
                    }
                    charCodeAtResult2 = value8.charCodeAt(num33);
                  }
                  num35 = num34;
                }
                return num35;
              }
            }
          } else {
            return 0;
          }
          obj2 = _mod12657;
        }
      }
      if (type.type !== Ident) {
        let tmp29 = null;
        let tmp4 = null !== type;
        if (tmp4) {
          tmp4 = type.type === Delim;
        }
        if (tmp4) {
          const value10 = type.value;
          tmp4 = value10.charCodeAt(0) === 43;
        }
        if (type.type === Dimension) {
          const value11 = type.value;
          let num8 = 43;
          if (43 === charCodeAtResult3) {
            let num9 = 1;
          } else {
            num9 = 0;
          }
          let tmp8 = num9;
          if (num9 < type.value.length) {
            const value12 = type.value;
            let tmp12 = num9;
            tmp8 = num9;
            if (obj3.isDigit(value12.charCodeAt(num9))) {
              const sum3 = tmp12 + 1;
              tmp8 = sum3;
              while (sum3 < type.value.length) {
                let obj = _mod12657;
                let value13 = type.value;
                tmp12 = sum3;
                tmp8 = sum3;
                if (!obj.isDigit(value13.charCodeAt(sum3))) {
                  break;
                }
              }
            }
            obj3 = _mod12657;
          }
          let num10 = 0;
          if (tmp8 !== num9) {
            if (!obj4.cmpChar(type.value, tmp8, 110)) {
              num10 = 0;
            } else {
              const sum4 = tmp8 + 1;
              if (sum4 === type.value.length) {
                const num16 = consumeB(fn(1), 1, fn);
              } else {
                const value14 = type.value;
                if (value14.charCodeAt(sum4) === c8) {
                  const sum5 = tmp8 + 2;
                  if (sum5 === type.value.length) {
                    const tmp22 = fn(1);
                    let num13 = 1;
                    if (tmp29 !== tmp22) {
                      let num14 = 1;
                      if (tmp22.type === WhiteSpace) {
                        const sum6 = num14 + 1;
                        const tmp26 = fn(sum6);
                        num13 = sum6;
                        while (tmp29 !== tmp26) {
                          num14 = sum6;
                          if (tmp26.type === WhiteSpace) {
                            continue;
                          } else {
                            num14 = sum6;
                            num13 = sum6;
                            if (tmp26.type !== Comment) {
                              break;
                            }
                          }
                          continue;
                        }
                      } else {
                        num14 = 1;
                        num13 = 1;
                      }
                    }
                    const iter = fn(num13);
                    tmp29 = c9;
                    if (iter) {
                      const value15 = iter.value;
                      if (num8 === charCodeAtResult4) {
                        num8 = 1;
                      } else {
                        num8 = 0;
                      }
                      if (num8 >= iter.value.length) {
                        const num15 = num13 + 1;
                      } else {
                        _mod12657;
                        const value16 = iter.value;
                        while (tmp36(value16.charCodeAt(num8))) {
                          num8 = num8 + 1;
                        }
                      }
                      charCodeAtResult4 = value15.charCodeAt(0);
                    }
                  } else if (type) {
                    const value17 = type.value;
                    if (num8 === charCodeAtResult5) {
                      if (!tmp109) {
                        let sum7 = sum5 + 1;
                      }
                    } else {
                      sum7 = sum5;
                    }
                    if (sum7 < type.value.length) {
                      _mod12657;
                      const value18 = type.value;
                      while (tmp19(value18.charCodeAt(sum7))) {
                        let sum8 = sum7 + 1;
                        sum7 = sum8;
                        if (sum8 >= type.value.length) {
                          break;
                        }
                      }
                    }
                    charCodeAtResult5 = value17.charCodeAt(sum5);
                  }
                }
              }
            }
            obj4 = _mod12657;
          }
          return num10;
        } else {
          return 0;
        }
      }
      let num18 = 0;
      let iter2 = type;
      if (type.type !== Ident) {
        iter2 = fn(1);
        num18 = 1;
      }
      if (null !== iter2) {
        if (obj5.cmpChar(iter2.value, 0, 110)) {
          if (1 === iter2.value.length) {
            const sum9 = num18 + 1;
            return consumeB(fn(sum9), sum9, fn);
          } else {
            let num22 = 2;
            if (2 === length) {
              const value19 = iter2.value;
              let num25 = 0;
              if (value19.charCodeAt(1) === c8) {
                const sum10 = num18 + 1;
                const tmp115 = fn(sum10);
                let tmp52 = sum10;
                if (null !== tmp115) {
                  let tmp50 = sum10;
                  if (tmp115.type === WhiteSpace) {
                    const sum11 = tmp50 + 1;
                    const tmp54 = fn(sum11);
                    tmp52 = sum11;
                    while (null !== tmp54) {
                      tmp50 = sum11;
                      if (tmp54.type === WhiteSpace) {
                        continue;
                      } else {
                        tmp50 = sum11;
                        tmp52 = sum11;
                        if (tmp54.type !== Comment) {
                          break;
                        }
                      }
                      continue;
                    }
                  } else {
                    tmp50 = sum10;
                    tmp52 = sum10;
                  }
                }
                const iter3 = fn(tmp52);
                let num26 = 0;
                if (iter3) {
                  const value20 = iter3.value;
                  if (43 === charCodeAtResult6) {
                    let num28 = 1;
                    num26 = 0;
                  } else {
                    num28 = 0;
                  }
                  if (num28 >= iter3.value.length) {
                    num26 = tmp52 + 1;
                  } else {
                    _mod12657;
                    const value21 = iter3.value;
                    num26 = 0;
                    while (tmp64(value21.charCodeAt(num28))) {
                      num28 = num28 + 1;
                      break;
                    }
                  }
                  charCodeAtResult6 = value20.charCodeAt(0);
                }
                num25 = num26;
              }
              return num25;
            } else {
              const value22 = iter2.value;
              let num24 = 0;
              if (value22.charCodeAt(1) === c8) {
                let num23 = 0;
                if (iter2) {
                  const value23 = iter2.value;
                  if (43 === charCodeAtResult7) {
                    num22 = 3;
                    num23 = 0;
                  }
                  if (num22 >= iter2.value.length) {
                    num23 = num18 + 1;
                  } else {
                    _mod12657;
                    const value24 = iter2.value;
                    num23 = 0;
                    while (tmp46(value24.charCodeAt(num22))) {
                      num22 = num22 + 1;
                      break;
                    }
                  }
                  charCodeAtResult7 = value23.charCodeAt(num22);
                }
                num24 = num23;
              }
              return num24;
            }
          }
        }
        obj5 = _mod12657;
      }
      return 0;
    }
  } else {
    return 0;
  }
}
