// _runtime/09667_m.js
let self = this;
let fn = function m() {
  function y(arg0, arg1, arg2) {
    const StringResult = String(arg0);
    if (StringResult.length > arg1 >> 0) {
      const _String2 = String;
      let StringResult1 = String(StringResult);
    } else {
      const diff = tmp - StringResult.length;
      if (diff <= "0".length) {
        const slice = "0".slice;
        const _String = String;
        const substr = "0".slice(0, diff);
        StringResult1 = substr + String(StringResult);
      } else {
        const result = diff / "0".length;
        if (typeof h === "function") {
          const items = [];
          if (isArray("0")) {
            let num4 = 0;
            if (0 < result) {
              do {
                let items1 = [];
                items[num4] = items1.concat("0");
                num4 = num4 + 1;
              } while (num4 < result);
            }
          } else {
            let num2 = 0;
            if (0 < result) {
              do {
                items[num2] = "0";
                num2 = num2 + 1;
              } while (num2 < result);
            }
          }
          const text = `0${arr2}`;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    return StringResult1;
  }
  function Q(arg0, arg1) {
    let obj = {};
    if (typeof closure_46 === "function") {
      obj = { done: true, rules: tmp2 };
      let tmp4 = null;
      if (obj.start(arg0)) {
        obj.expect("every");
        let acceptNumberResult = obj.acceptNumber();
        if (acceptNumberResult) {
          let _parseInt = parseInt;
          obj.interval = parseInt(acceptNumberResult[0], 10);
        }
        if (obj.isDone()) {
          const _Error20 = Error;
          let error = new Error("Unexpected end");
          throw error;
        } else {
          fn = function i() {
            let parsed;
            if (acceptResult) {
              while (true) {
                let iter = obj;
                let symbol = obj.symbol;
                let str = "last";
                if ("last" === symbol) {
                  let nextSymbolResult = iter.nextSymbol();
                  let flag = -1;
                } else {
                  let str20 = "first";
                  if ("first" === symbol) {
                    let nextSymbolResult1 = iter.nextSymbol();
                    flag = 1;
                  } else {
                    let str21 = "second";
                    if ("second" === symbol) {
                      let nextSymbolResult2 = iter.nextSymbol();
                      let num3 = 2;
                      if (iter.accept("last")) {
                        num3 = -2;
                      }
                      flag = num3;
                    } else {
                      let str22 = "third";
                      if ("third" === symbol) {
                        let nextSymbolResult3 = iter.nextSymbol();
                        let num2 = 3;
                        if (iter.accept("last")) {
                          num2 = -3;
                        }
                        flag = num2;
                      } else {
                        let str23 = "nth";
                        flag = false;
                        if ("nth" === symbol) {
                          let tmp49 = globalThis;
                          let _parseInt3 = parseInt;
                          parsed = parseInt(iter.value[1], 10);
                          if (parsed < -366) {
                            break;
                          } else if (parsed > 366) {
                            break;
                          } else {
                            let nextSymbolResult4 = iter.nextSymbol();
                            let tmp4 = parsed;
                            if (iter.accept("last")) {
                              tmp4 = -parsed;
                            }
                            flag = tmp4;
                          }
                        }
                      }
                    }
                  }
                }
                let symbol2 = iter.symbol;
                let str3 = "monday";
                if ("monday" !== symbol2) {
                  let str4 = "tuesday";
                  if ("tuesday" !== symbol2) {
                    let str5 = "wednesday";
                    if ("wednesday" !== symbol2) {
                      let str6 = "thursday";
                      if ("thursday" !== symbol2) {
                        let str7 = "friday";
                        if ("friday" !== symbol2) {
                          let str8 = "saturday";
                          if ("saturday" !== symbol2) {
                            let str9 = "sunday";
                            let flag2 = false;
                          }
                          let flag3 = 12;
                          switch (iter.symbol) {
                            case "january":
                              flag3 = 1;
                              if (flag) {
                                if (flag2) {
                                  let nextSymbolResult5 = iter.nextSymbol();
                                  let tmp46 = obj;
                                  if (!obj.byweekday) {
                                    tmp46.byweekday = [];
                                  }
                                  let byweekday = tmp46.byweekday;
                                  obj3 = constants[flag2];
                                  let arr = byweekday.push(obj3.nth(flag));
                                  obj = iter;
                                } else {
                                  let tmp42 = obj;
                                  if (!obj.bymonthday) {
                                    tmp42.bymonthday = [];
                                  }
                                  let bymonthday = tmp42.bymonthday;
                                  arr = bymonthday.push(flag);
                                  let str18 = "day(s)";
                                  let acceptResult1 = iter.accept("day(s)");
                                  obj = iter;
                                }
                              } else if (flag2) {
                                let nextSymbolResult6 = iter.nextSymbol();
                                let tmp39 = obj;
                                if (!obj.byweekday) {
                                  tmp39.byweekday = [];
                                }
                                let byweekday1 = tmp39.byweekday;
                                let arr1 = byweekday1.push(constants[flag2]);
                                obj = iter;
                              } else {
                                let str12 = "weekday(s)";
                                if ("weekday(s)" === iter.symbol) {
                                  let nextSymbolResult7 = iter.nextSymbol();
                                  obj = iter;
                                  if (!obj.byweekday) {
                                    let items = [constants.MO, , , ,];
                                    items[1] = constants.TU;
                                    items[2] = constants.WE;
                                    items[3] = constants.TH;
                                    items[4] = constants.FR;
                                    tmp32.byweekday = items;
                                    obj = iter;
                                  }
                                } else {
                                  let str24 = "week(s)";
                                  if ("week(s)" === iter.symbol) {
                                    let nextSymbolResult8 = iter.nextSymbol();
                                    let acceptNumberResult = iter.acceptNumber();
                                    let tmp18 = globalThis;
                                    if (acceptNumberResult) {
                                      let _parseInt = parseInt;
                                      let items1 = [parseInt(acceptNumberResult[0], 10)];
                                      obj.byweekno = items1;
                                      let str15 = "comma";
                                      obj = iter;
                                      if (iter.accept("comma")) {
                                        obj2 = obj;
                                        let acceptNumberResult1 = obj.acceptNumber();
                                        while (acceptNumberResult1) {
                                          let byweekno = obj.byweekno;
                                          let _parseInt2 = parseInt;
                                          let arr2 = byweekno.push(parseInt(acceptNumberResult1[0], 10));
                                          obj = obj2;
                                          continue;
                                        }
                                        let _Error3 = Error;
                                        let str16 = "Unexpected symbol ";
                                        let tmp25 = new.target;
                                        let str17 = "; expected monthday";
                                        let tmp26 = new.target;
                                        let error = new Error(
                                          "Unexpected symbol " + obj2.symbol + "; expected monthday",
                                        );
                                        throw error;
                                      }
                                    } else {
                                      let _Error2 = Error;
                                      let str13 = "Unexpected symbol ";
                                      let tmp19 = new.target;
                                      let str14 = ", expected week number";
                                      let tmp20 = new.target;
                                      let error1 = new Error(
                                        "Unexpected symbol " + iter.symbol + ", expected week number",
                                      );
                                      throw error1;
                                    }
                                  } else if (flag3) {
                                    let nextSymbolResult9 = iter.nextSymbol();
                                    let tmp14 = obj;
                                    if (!obj.bymonth) {
                                      tmp14.bymonth = [];
                                    }
                                    let bymonth = tmp14.bymonth;
                                    let arr3 = bymonth.push(flag3);
                                    obj = iter;
                                  }
                                }
                              }
                              let str19 = "comma";
                              continue;
                              break;
                            case "february":
                              flag3 = 2;
                              break;
                            case "march":
                              flag3 = 3;
                              break;
                            case "april":
                              flag3 = 4;
                              break;
                            case "may":
                              flag3 = 5;
                              break;
                            case "june":
                              flag3 = 6;
                              break;
                            case "july":
                              flag3 = 7;
                              break;
                            case "august":
                              flag3 = 8;
                              break;
                            case "september":
                              flag3 = 9;
                              break;
                            case "october":
                              flag3 = 10;
                              break;
                            case "november":
                              flag3 = 11;
                              break;
                            case "december":
                              break;
                            default:
                              flag3 = false;
                          }
                        }
                      }
                    }
                  }
                }
                let str10 = iter.symbol;
                let str11 = str10.substr(0, 2);
                flag2 = str11.toUpperCase();
              }
              const _Error = Error;
              const error2 = new Error("Nth out of range: " + parsed);
              throw error2;
            }
          };
          switch (obj.symbol) {
            case "day(s)":
              obj.freq = constants.DAILY;
              tmp4 = obj;
              if (obj.nextSymbol()) {
                if (obj.accept("at")) {
                  let acceptNumberResult1 = obj.acceptNumber();
                  while (acceptNumberResult1) {
                    let _parseInt10 = parseInt;
                    let items = [parseInt(acceptNumberResult1[0], 10)];
                    obj.byhour = items;
                    if (obj.accept("comma")) {
                      let acceptNumberResult2 = obj.acceptNumber();
                      while (acceptNumberResult2) {
                        let byhour = obj.byhour;
                        let _parseInt11 = parseInt;
                        let arr = byhour.push(parseInt(acceptNumberResult2[0], 10));
                        continue;
                      }
                      let _Error17 = Error;
                      let str68 = "Unexpected symbol ";
                      let tmp223 = new.target;
                      let str69 = "; expected hour";
                      let tmp224 = new.target;
                      let error1 = new Error("Unexpected symbol " + obj.symbol + "; expected hour");
                      throw error1;
                    }
                    continue;
                  }
                  const _Error16 = Error;
                  let error2 = new Error("Unexpected symbol " + obj.symbol + ", expected hour");
                  throw error2;
                }
                if ("until" === obj.symbol) {
                  const _Date17 = Date;
                  let parsed = Date.parse(obj.text);
                  if (parsed) {
                    const _Date18 = Date;
                    date = new Date(parsed);
                    obj.until = date;
                    tmp4 = obj;
                  } else {
                    const _Error18 = Error;
                    const error3 = new Error("Cannot parse until date:" + obj.text);
                    throw error3;
                  }
                } else {
                  tmp4 = obj;
                  if (obj.accept("for")) {
                    const _parseInt12 = parseInt;
                    obj.count = parseInt(obj.value[0], 10);
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "weekday(s)":
              obj.freq = constants.WEEKLY;
              let items1 = [, , , ,];
              ({ MO: arr7[0], TU: arr7[1], WE: arr7[2], TH: arr7[3], FR: arr7[4] } = constants);
              obj.byweekday = items1;
              obj.nextSymbol();
              if ("until" === obj.symbol) {
                const _Date15 = Date;
                const parsed1 = Date.parse(obj.text);
                if (parsed1) {
                  const _Date16 = Date;
                  const date1 = new Date(parsed1);
                  obj.until = date1;
                  tmp4 = obj;
                } else {
                  const _Error15 = Error;
                  const error4 = new Error("Cannot parse until date:" + obj.text);
                  throw error4;
                }
              } else {
                tmp4 = obj;
                if (obj.accept("for")) {
                  const _parseInt9 = parseInt;
                  obj.count = parseInt(obj.value[0], 10);
                  obj.expect("number");
                  tmp4 = obj;
                }
              }
              break;
            case "week(s)":
              obj.freq = constants.WEEKLY;
              tmp4 = obj;
              if (obj.nextSymbol()) {
                fn();
                if ("until" === obj.symbol) {
                  const _Date13 = Date;
                  const parsed2 = Date.parse(obj.text);
                  if (parsed2) {
                    const _Date14 = Date;
                    const date2 = new Date(parsed2);
                    obj.until = date2;
                    tmp4 = obj;
                  } else {
                    const _Error14 = Error;
                    const error5 = new Error("Cannot parse until date:" + obj.text);
                    throw error5;
                  }
                } else {
                  tmp4 = obj;
                  if (obj.accept("for")) {
                    const _parseInt8 = parseInt;
                    obj.count = parseInt(obj.value[0], 10);
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "hour(s)":
              obj.freq = constants.HOURLY;
              tmp4 = obj;
              if (obj.nextSymbol()) {
                fn();
                if ("until" === obj.symbol) {
                  const _Date11 = Date;
                  const parsed3 = Date.parse(obj.text);
                  if (parsed3) {
                    const _Date12 = Date;
                    const date3 = new Date(parsed3);
                    obj.until = date3;
                    tmp4 = obj;
                  } else {
                    const _Error13 = Error;
                    const error6 = new Error("Cannot parse until date:" + obj.text);
                    throw error6;
                  }
                } else {
                  tmp4 = obj;
                  if (obj.accept("for")) {
                    const _parseInt7 = parseInt;
                    obj.count = parseInt(obj.value[0], 10);
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "minute(s)":
              obj.freq = constants.MINUTELY;
              tmp4 = obj;
              if (obj.nextSymbol()) {
                fn();
                if ("until" === obj.symbol) {
                  const _Date9 = Date;
                  const parsed4 = Date.parse(obj.text);
                  if (parsed4) {
                    const _Date10 = Date;
                    const date4 = new Date(parsed4);
                    obj.until = date4;
                    tmp4 = obj;
                  } else {
                    const _Error12 = Error;
                    const error7 = new Error("Cannot parse until date:" + obj.text);
                    throw error7;
                  }
                } else {
                  tmp4 = obj;
                  if (obj.accept("for")) {
                    const _parseInt6 = parseInt;
                    obj.count = parseInt(obj.value[0], 10);
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "month(s)":
              obj.freq = constants.MONTHLY;
              tmp4 = obj;
              if (obj.nextSymbol()) {
                fn();
                if ("until" === obj.symbol) {
                  const _Date7 = Date;
                  const parsed5 = Date.parse(obj.text);
                  if (parsed5) {
                    const _Date8 = Date;
                    const date5 = new Date(parsed5);
                    obj.until = date5;
                    tmp4 = obj;
                  } else {
                    const _Error11 = Error;
                    const error8 = new Error("Cannot parse until date:" + obj.text);
                    throw error8;
                  }
                } else {
                  tmp4 = obj;
                  if (obj.accept("for")) {
                    const _parseInt5 = parseInt;
                    obj.count = parseInt(obj.value[0], 10);
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "year(s)":
              obj.freq = constants.YEARLY;
              tmp4 = obj;
              if (obj.nextSymbol()) {
                fn();
                if ("until" === obj.symbol) {
                  const _Date5 = Date;
                  const parsed6 = Date.parse(obj.text);
                  if (parsed6) {
                    const _Date6 = Date;
                    const date6 = new Date(parsed6);
                    obj.until = date6;
                    tmp4 = obj;
                  } else {
                    const _Error10 = Error;
                    const error9 = new Error("Cannot parse until date:" + obj.text);
                    throw error9;
                  }
                } else {
                  tmp4 = obj;
                  if (obj.accept("for")) {
                    const _parseInt4 = parseInt;
                    obj.count = parseInt(obj.value[0], 10);
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "monday":
              obj.freq = constants.WEEKLY;
              let str10 = obj.symbol;
              let str11 = str10.substr(0, 2);
              let formatted = str11.toUpperCase();
              let items2 = [constants[formatted]];
              obj.byweekday = items2;
              let nextSymbolResult1 = obj.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                let acceptResult = obj.accept("comma");
                if (acceptResult) {
                  let isDoneResult = obj.isDone();
                  while (!isDoneResult) {
                    let symbol2 = obj.symbol;
                    if ("monday" !== symbol2) {
                      if ("tuesday" !== symbol2) {
                        if ("wednesday" !== symbol2) {
                          if ("thursday" !== symbol2) {
                            if ("friday" !== symbol2) {
                              if ("saturday" !== symbol2) {
                                let flag4 = false;
                              }
                              if (flag4) {
                                let byweekday = obj.byweekday;
                                arr = byweekday.push(constants[flag4]);
                                let nextSymbolResult2 = obj.nextSymbol();
                                let acceptResult1 = obj.accept("comma");
                              } else {
                                let tmp51 = globalThis;
                                let _Error4 = Error;
                                let symbol3 = obj.symbol;
                                let str22 = "Unexpected symbol ";
                                let text = `Unexpected symbol ${symbol3}`;
                                let tmp53 = new.target;
                                let str23 = ", expected weekday";
                                let text1 = `Unexpected symbol ${symbol3}, expected weekday`;
                                let tmp55 = new.target;
                                let error10 = new Error(`Unexpected symbol ${symbol3}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    let str20 = obj.symbol;
                    let str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  let _Error9 = Error;
                  let error11 = new Error("Unexpected end");
                  throw error11;
                }
                obj.accept("on");
                obj.accept("the");
                let symbol4 = obj.symbol;
                if ("last" === symbol4) {
                  obj.nextSymbol();
                  let flag5 = -1;
                } else if ("first" === symbol4) {
                  obj.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol4) {
                  obj.nextSymbol();
                  let acceptResult4 = obj.accept("last");
                  let num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol4) {
                  obj.nextSymbol();
                  let acceptResult5 = obj.accept("last");
                  let num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol4) {
                    let _parseInt13 = parseInt;
                    let parsed7 = parseInt(obj.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        obj.nextSymbol();
                        let acceptResult6 = obj.accept("last");
                        let tmp66 = parsed7;
                        if (acceptResult6) {
                          tmp66 = -parsed7;
                        }
                        flag5 = tmp66;
                      }
                    }
                    let _Error5 = Error;
                    let text2 = `Nth out of range: ${tmp250}`;
                    let error12 = new Error(`Nth out of range: ${tmp250}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  let items3 = [flag5];
                  obj.bymonthday = items3;
                  obj.nextSymbol();
                  let acceptResult7 = obj.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      let symbol5 = obj.symbol;
                      if ("last" === symbol5) {
                        let nextSymbolResult9 = obj.nextSymbol();
                        let flag6 = -1;
                      } else if ("first" === symbol5) {
                        let nextSymbolResult10 = obj.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol5) {
                        let nextSymbolResult11 = obj.nextSymbol();
                        let acceptResult8 = obj.accept("last");
                        let num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol5) {
                        let nextSymbolResult12 = obj.nextSymbol();
                        let acceptResult9 = obj.accept("last");
                        let num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol5) {
                          let _parseInt14 = parseInt;
                          let parsed8 = parseInt(obj.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            let nextSymbolResult13 = obj.nextSymbol();
                            let acceptResult10 = obj.accept("last");
                            let tmp83 = parsed8;
                            if (acceptResult10) {
                              tmp83 = -parsed8;
                            }
                            flag6 = tmp83;
                          }
                        }
                      }
                      if (flag6) {
                        let bymonthday = obj.bymonthday;
                        let arr1 = bymonthday.push(flag6);
                        let nextSymbolResult14 = obj.nextSymbol();
                        let acceptResult11 = obj.accept("comma");
                      } else {
                        let _Error7 = Error;
                        let symbol6 = obj.symbol;
                        let str33 = "Unexpected symbol ";
                        let text3 = `Unexpected symbol ${symbol6}`;
                        let tmp96 = new.target;
                        let str34 = "; expected monthday";
                        let text4 = `Unexpected symbol ${symbol6}; expected monthday`;
                        let tmp98 = new.target;
                        let error13 = new Error(`Unexpected symbol ${symbol6}; expected monthday`);
                        throw error13;
                      }
                    }
                    let _Error6 = Error;
                    let text5 = `Nth out of range: ${tmp251}`;
                    let error14 = new Error(`Nth out of range: ${tmp251}`);
                    throw error14;
                  }
                }
                if ("until" === obj.symbol) {
                  let _Date3 = Date;
                  let parsed9 = Date.parse(obj.text);
                  if (parsed9) {
                    let _Date4 = Date;
                    let date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    let _Error8 = Error;
                    text2 = obj.text;
                    let text6 = `Cannot parse until date:${text2}`;
                    let error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  let acceptResult12 = obj.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    let _parseInt3 = parseInt;
                    let parsed10 = parseInt(obj.value[0], 10);
                    obj.count = parsed10;
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "tuesday":
              obj.freq = constants.WEEKLY;
              str10 = obj.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                acceptResult = obj.accept("comma");
                if (acceptResult) {
                  isDoneResult = obj.isDone();
                  while (!isDoneResult) {
                    symbol2 = obj.symbol;
                    if ("monday" !== symbol2) {
                      if ("tuesday" !== symbol2) {
                        if ("wednesday" !== symbol2) {
                          if ("thursday" !== symbol2) {
                            if ("friday" !== symbol2) {
                              if ("saturday" !== symbol2) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                arr = byweekday.push(constants[flag4]);
                                nextSymbolResult2 = obj.nextSymbol();
                                acceptResult1 = obj.accept("comma");
                              } else {
                                tmp51 = globalThis;
                                _Error4 = Error;
                                symbol3 = obj.symbol;
                                str22 = "Unexpected symbol ";
                                text = `Unexpected symbol ${symbol3}`;
                                tmp53 = new.target;
                                str23 = ", expected weekday";
                                text1 = `Unexpected symbol ${symbol3}, expected weekday`;
                                tmp55 = new.target;
                                error10 = new Error(`Unexpected symbol ${symbol3}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  _Error9 = Error;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                obj.accept("on");
                obj.accept("the");
                symbol4 = obj.symbol;
                if ("last" === symbol4) {
                  obj.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol4) {
                  obj.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol4) {
                  obj.nextSymbol();
                  acceptResult4 = obj.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol4) {
                  obj.nextSymbol();
                  acceptResult5 = obj.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol4) {
                    _parseInt13 = parseInt;
                    parsed7 = parseInt(obj.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        obj.nextSymbol();
                        acceptResult6 = obj.accept("last");
                        tmp66 = parsed7;
                        if (acceptResult6) {
                          tmp66 = -parsed7;
                        }
                        flag5 = tmp66;
                      }
                    }
                    _Error5 = Error;
                    text2 = `Nth out of range: ${tmp250}`;
                    error12 = new Error(`Nth out of range: ${tmp250}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  obj.nextSymbol();
                  acceptResult7 = obj.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol5 = obj.symbol;
                      if ("last" === symbol5) {
                        nextSymbolResult9 = obj.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol5) {
                        nextSymbolResult10 = obj.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol5) {
                        nextSymbolResult11 = obj.nextSymbol();
                        acceptResult8 = obj.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol5) {
                        nextSymbolResult12 = obj.nextSymbol();
                        acceptResult9 = obj.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol5) {
                          _parseInt14 = parseInt;
                          parsed8 = parseInt(obj.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            nextSymbolResult13 = obj.nextSymbol();
                            acceptResult10 = obj.accept("last");
                            tmp83 = parsed8;
                            if (acceptResult10) {
                              tmp83 = -parsed8;
                            }
                            flag6 = tmp83;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        arr1 = bymonthday.push(flag6);
                        nextSymbolResult14 = obj.nextSymbol();
                        acceptResult11 = obj.accept("comma");
                      } else {
                        _Error7 = Error;
                        symbol6 = obj.symbol;
                        str33 = "Unexpected symbol ";
                        text3 = `Unexpected symbol ${symbol6}`;
                        tmp96 = new.target;
                        str34 = "; expected monthday";
                        text4 = `Unexpected symbol ${symbol6}; expected monthday`;
                        tmp98 = new.target;
                        error13 = new Error(`Unexpected symbol ${symbol6}; expected monthday`);
                        throw error13;
                      }
                    }
                    _Error6 = Error;
                    text5 = `Nth out of range: ${tmp251}`;
                    error14 = new Error(`Nth out of range: ${tmp251}`);
                    throw error14;
                  }
                }
                if ("until" === obj.symbol) {
                  _Date3 = Date;
                  parsed9 = Date.parse(obj.text);
                  if (parsed9) {
                    _Date4 = Date;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    _Error8 = Error;
                    text2 = obj.text;
                    text6 = `Cannot parse until date:${text2}`;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    _parseInt3 = parseInt;
                    parsed10 = parseInt(obj.value[0], 10);
                    obj.count = parsed10;
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "wednesday":
              obj.freq = constants.WEEKLY;
              str10 = obj.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                acceptResult = obj.accept("comma");
                if (acceptResult) {
                  isDoneResult = obj.isDone();
                  while (!isDoneResult) {
                    symbol2 = obj.symbol;
                    if ("monday" !== symbol2) {
                      if ("tuesday" !== symbol2) {
                        if ("wednesday" !== symbol2) {
                          if ("thursday" !== symbol2) {
                            if ("friday" !== symbol2) {
                              if ("saturday" !== symbol2) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                arr = byweekday.push(constants[flag4]);
                                nextSymbolResult2 = obj.nextSymbol();
                                acceptResult1 = obj.accept("comma");
                              } else {
                                tmp51 = globalThis;
                                _Error4 = Error;
                                symbol3 = obj.symbol;
                                str22 = "Unexpected symbol ";
                                text = `Unexpected symbol ${symbol3}`;
                                tmp53 = new.target;
                                str23 = ", expected weekday";
                                text1 = `Unexpected symbol ${symbol3}, expected weekday`;
                                tmp55 = new.target;
                                error10 = new Error(`Unexpected symbol ${symbol3}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  _Error9 = Error;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                obj.accept("on");
                obj.accept("the");
                symbol4 = obj.symbol;
                if ("last" === symbol4) {
                  obj.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol4) {
                  obj.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol4) {
                  obj.nextSymbol();
                  acceptResult4 = obj.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol4) {
                  obj.nextSymbol();
                  acceptResult5 = obj.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol4) {
                    _parseInt13 = parseInt;
                    parsed7 = parseInt(obj.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        obj.nextSymbol();
                        acceptResult6 = obj.accept("last");
                        tmp66 = parsed7;
                        if (acceptResult6) {
                          tmp66 = -parsed7;
                        }
                        flag5 = tmp66;
                      }
                    }
                    _Error5 = Error;
                    text2 = `Nth out of range: ${tmp250}`;
                    error12 = new Error(`Nth out of range: ${tmp250}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  obj.nextSymbol();
                  acceptResult7 = obj.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol5 = obj.symbol;
                      if ("last" === symbol5) {
                        nextSymbolResult9 = obj.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol5) {
                        nextSymbolResult10 = obj.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol5) {
                        nextSymbolResult11 = obj.nextSymbol();
                        acceptResult8 = obj.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol5) {
                        nextSymbolResult12 = obj.nextSymbol();
                        acceptResult9 = obj.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol5) {
                          _parseInt14 = parseInt;
                          parsed8 = parseInt(obj.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            nextSymbolResult13 = obj.nextSymbol();
                            acceptResult10 = obj.accept("last");
                            tmp83 = parsed8;
                            if (acceptResult10) {
                              tmp83 = -parsed8;
                            }
                            flag6 = tmp83;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        arr1 = bymonthday.push(flag6);
                        nextSymbolResult14 = obj.nextSymbol();
                        acceptResult11 = obj.accept("comma");
                      } else {
                        _Error7 = Error;
                        symbol6 = obj.symbol;
                        str33 = "Unexpected symbol ";
                        text3 = `Unexpected symbol ${symbol6}`;
                        tmp96 = new.target;
                        str34 = "; expected monthday";
                        text4 = `Unexpected symbol ${symbol6}; expected monthday`;
                        tmp98 = new.target;
                        error13 = new Error(`Unexpected symbol ${symbol6}; expected monthday`);
                        throw error13;
                      }
                    }
                    _Error6 = Error;
                    text5 = `Nth out of range: ${tmp251}`;
                    error14 = new Error(`Nth out of range: ${tmp251}`);
                    throw error14;
                  }
                }
                if ("until" === obj.symbol) {
                  _Date3 = Date;
                  parsed9 = Date.parse(obj.text);
                  if (parsed9) {
                    _Date4 = Date;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    _Error8 = Error;
                    text2 = obj.text;
                    text6 = `Cannot parse until date:${text2}`;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    _parseInt3 = parseInt;
                    parsed10 = parseInt(obj.value[0], 10);
                    obj.count = parsed10;
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "thursday":
              obj.freq = constants.WEEKLY;
              str10 = obj.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                acceptResult = obj.accept("comma");
                if (acceptResult) {
                  isDoneResult = obj.isDone();
                  while (!isDoneResult) {
                    symbol2 = obj.symbol;
                    if ("monday" !== symbol2) {
                      if ("tuesday" !== symbol2) {
                        if ("wednesday" !== symbol2) {
                          if ("thursday" !== symbol2) {
                            if ("friday" !== symbol2) {
                              if ("saturday" !== symbol2) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                arr = byweekday.push(constants[flag4]);
                                nextSymbolResult2 = obj.nextSymbol();
                                acceptResult1 = obj.accept("comma");
                              } else {
                                tmp51 = globalThis;
                                _Error4 = Error;
                                symbol3 = obj.symbol;
                                str22 = "Unexpected symbol ";
                                text = `Unexpected symbol ${symbol3}`;
                                tmp53 = new.target;
                                str23 = ", expected weekday";
                                text1 = `Unexpected symbol ${symbol3}, expected weekday`;
                                tmp55 = new.target;
                                error10 = new Error(`Unexpected symbol ${symbol3}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  _Error9 = Error;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                obj.accept("on");
                obj.accept("the");
                symbol4 = obj.symbol;
                if ("last" === symbol4) {
                  obj.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol4) {
                  obj.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol4) {
                  obj.nextSymbol();
                  acceptResult4 = obj.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol4) {
                  obj.nextSymbol();
                  acceptResult5 = obj.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol4) {
                    _parseInt13 = parseInt;
                    parsed7 = parseInt(obj.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        obj.nextSymbol();
                        acceptResult6 = obj.accept("last");
                        tmp66 = parsed7;
                        if (acceptResult6) {
                          tmp66 = -parsed7;
                        }
                        flag5 = tmp66;
                      }
                    }
                    _Error5 = Error;
                    text2 = `Nth out of range: ${tmp250}`;
                    error12 = new Error(`Nth out of range: ${tmp250}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  obj.nextSymbol();
                  acceptResult7 = obj.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol5 = obj.symbol;
                      if ("last" === symbol5) {
                        nextSymbolResult9 = obj.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol5) {
                        nextSymbolResult10 = obj.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol5) {
                        nextSymbolResult11 = obj.nextSymbol();
                        acceptResult8 = obj.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol5) {
                        nextSymbolResult12 = obj.nextSymbol();
                        acceptResult9 = obj.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol5) {
                          _parseInt14 = parseInt;
                          parsed8 = parseInt(obj.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            nextSymbolResult13 = obj.nextSymbol();
                            acceptResult10 = obj.accept("last");
                            tmp83 = parsed8;
                            if (acceptResult10) {
                              tmp83 = -parsed8;
                            }
                            flag6 = tmp83;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        arr1 = bymonthday.push(flag6);
                        nextSymbolResult14 = obj.nextSymbol();
                        acceptResult11 = obj.accept("comma");
                      } else {
                        _Error7 = Error;
                        symbol6 = obj.symbol;
                        str33 = "Unexpected symbol ";
                        text3 = `Unexpected symbol ${symbol6}`;
                        tmp96 = new.target;
                        str34 = "; expected monthday";
                        text4 = `Unexpected symbol ${symbol6}; expected monthday`;
                        tmp98 = new.target;
                        error13 = new Error(`Unexpected symbol ${symbol6}; expected monthday`);
                        throw error13;
                      }
                    }
                    _Error6 = Error;
                    text5 = `Nth out of range: ${tmp251}`;
                    error14 = new Error(`Nth out of range: ${tmp251}`);
                    throw error14;
                  }
                }
                if ("until" === obj.symbol) {
                  _Date3 = Date;
                  parsed9 = Date.parse(obj.text);
                  if (parsed9) {
                    _Date4 = Date;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    _Error8 = Error;
                    text2 = obj.text;
                    text6 = `Cannot parse until date:${text2}`;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    _parseInt3 = parseInt;
                    parsed10 = parseInt(obj.value[0], 10);
                    obj.count = parsed10;
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "friday":
              obj.freq = constants.WEEKLY;
              str10 = obj.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                acceptResult = obj.accept("comma");
                if (acceptResult) {
                  isDoneResult = obj.isDone();
                  while (!isDoneResult) {
                    symbol2 = obj.symbol;
                    if ("monday" !== symbol2) {
                      if ("tuesday" !== symbol2) {
                        if ("wednesday" !== symbol2) {
                          if ("thursday" !== symbol2) {
                            if ("friday" !== symbol2) {
                              if ("saturday" !== symbol2) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                arr = byweekday.push(constants[flag4]);
                                nextSymbolResult2 = obj.nextSymbol();
                                acceptResult1 = obj.accept("comma");
                              } else {
                                tmp51 = globalThis;
                                _Error4 = Error;
                                symbol3 = obj.symbol;
                                str22 = "Unexpected symbol ";
                                text = `Unexpected symbol ${symbol3}`;
                                tmp53 = new.target;
                                str23 = ", expected weekday";
                                text1 = `Unexpected symbol ${symbol3}, expected weekday`;
                                tmp55 = new.target;
                                error10 = new Error(`Unexpected symbol ${symbol3}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  _Error9 = Error;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                obj.accept("on");
                obj.accept("the");
                symbol4 = obj.symbol;
                if ("last" === symbol4) {
                  obj.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol4) {
                  obj.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol4) {
                  obj.nextSymbol();
                  acceptResult4 = obj.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol4) {
                  obj.nextSymbol();
                  acceptResult5 = obj.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol4) {
                    _parseInt13 = parseInt;
                    parsed7 = parseInt(obj.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        obj.nextSymbol();
                        acceptResult6 = obj.accept("last");
                        tmp66 = parsed7;
                        if (acceptResult6) {
                          tmp66 = -parsed7;
                        }
                        flag5 = tmp66;
                      }
                    }
                    _Error5 = Error;
                    text2 = `Nth out of range: ${tmp250}`;
                    error12 = new Error(`Nth out of range: ${tmp250}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  obj.nextSymbol();
                  acceptResult7 = obj.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol5 = obj.symbol;
                      if ("last" === symbol5) {
                        nextSymbolResult9 = obj.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol5) {
                        nextSymbolResult10 = obj.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol5) {
                        nextSymbolResult11 = obj.nextSymbol();
                        acceptResult8 = obj.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol5) {
                        nextSymbolResult12 = obj.nextSymbol();
                        acceptResult9 = obj.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol5) {
                          _parseInt14 = parseInt;
                          parsed8 = parseInt(obj.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            nextSymbolResult13 = obj.nextSymbol();
                            acceptResult10 = obj.accept("last");
                            tmp83 = parsed8;
                            if (acceptResult10) {
                              tmp83 = -parsed8;
                            }
                            flag6 = tmp83;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        arr1 = bymonthday.push(flag6);
                        nextSymbolResult14 = obj.nextSymbol();
                        acceptResult11 = obj.accept("comma");
                      } else {
                        _Error7 = Error;
                        symbol6 = obj.symbol;
                        str33 = "Unexpected symbol ";
                        text3 = `Unexpected symbol ${symbol6}`;
                        tmp96 = new.target;
                        str34 = "; expected monthday";
                        text4 = `Unexpected symbol ${symbol6}; expected monthday`;
                        tmp98 = new.target;
                        error13 = new Error(`Unexpected symbol ${symbol6}; expected monthday`);
                        throw error13;
                      }
                    }
                    _Error6 = Error;
                    text5 = `Nth out of range: ${tmp251}`;
                    error14 = new Error(`Nth out of range: ${tmp251}`);
                    throw error14;
                  }
                }
                if ("until" === obj.symbol) {
                  _Date3 = Date;
                  parsed9 = Date.parse(obj.text);
                  if (parsed9) {
                    _Date4 = Date;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    _Error8 = Error;
                    text2 = obj.text;
                    text6 = `Cannot parse until date:${text2}`;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    _parseInt3 = parseInt;
                    parsed10 = parseInt(obj.value[0], 10);
                    obj.count = parsed10;
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "saturday":
              obj.freq = constants.WEEKLY;
              str10 = obj.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                acceptResult = obj.accept("comma");
                if (acceptResult) {
                  isDoneResult = obj.isDone();
                  while (!isDoneResult) {
                    symbol2 = obj.symbol;
                    if ("monday" !== symbol2) {
                      if ("tuesday" !== symbol2) {
                        if ("wednesday" !== symbol2) {
                          if ("thursday" !== symbol2) {
                            if ("friday" !== symbol2) {
                              if ("saturday" !== symbol2) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                arr = byweekday.push(constants[flag4]);
                                nextSymbolResult2 = obj.nextSymbol();
                                acceptResult1 = obj.accept("comma");
                              } else {
                                tmp51 = globalThis;
                                _Error4 = Error;
                                symbol3 = obj.symbol;
                                str22 = "Unexpected symbol ";
                                text = `Unexpected symbol ${symbol3}`;
                                tmp53 = new.target;
                                str23 = ", expected weekday";
                                text1 = `Unexpected symbol ${symbol3}, expected weekday`;
                                tmp55 = new.target;
                                error10 = new Error(`Unexpected symbol ${symbol3}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  _Error9 = Error;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                obj.accept("on");
                obj.accept("the");
                symbol4 = obj.symbol;
                if ("last" === symbol4) {
                  obj.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol4) {
                  obj.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol4) {
                  obj.nextSymbol();
                  acceptResult4 = obj.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol4) {
                  obj.nextSymbol();
                  acceptResult5 = obj.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol4) {
                    _parseInt13 = parseInt;
                    parsed7 = parseInt(obj.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        obj.nextSymbol();
                        acceptResult6 = obj.accept("last");
                        tmp66 = parsed7;
                        if (acceptResult6) {
                          tmp66 = -parsed7;
                        }
                        flag5 = tmp66;
                      }
                    }
                    _Error5 = Error;
                    text2 = `Nth out of range: ${tmp250}`;
                    error12 = new Error(`Nth out of range: ${tmp250}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  obj.nextSymbol();
                  acceptResult7 = obj.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol5 = obj.symbol;
                      if ("last" === symbol5) {
                        nextSymbolResult9 = obj.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol5) {
                        nextSymbolResult10 = obj.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol5) {
                        nextSymbolResult11 = obj.nextSymbol();
                        acceptResult8 = obj.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol5) {
                        nextSymbolResult12 = obj.nextSymbol();
                        acceptResult9 = obj.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol5) {
                          _parseInt14 = parseInt;
                          parsed8 = parseInt(obj.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            nextSymbolResult13 = obj.nextSymbol();
                            acceptResult10 = obj.accept("last");
                            tmp83 = parsed8;
                            if (acceptResult10) {
                              tmp83 = -parsed8;
                            }
                            flag6 = tmp83;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        arr1 = bymonthday.push(flag6);
                        nextSymbolResult14 = obj.nextSymbol();
                        acceptResult11 = obj.accept("comma");
                      } else {
                        _Error7 = Error;
                        symbol6 = obj.symbol;
                        str33 = "Unexpected symbol ";
                        text3 = `Unexpected symbol ${symbol6}`;
                        tmp96 = new.target;
                        str34 = "; expected monthday";
                        text4 = `Unexpected symbol ${symbol6}; expected monthday`;
                        tmp98 = new.target;
                        error13 = new Error(`Unexpected symbol ${symbol6}; expected monthday`);
                        throw error13;
                      }
                    }
                    _Error6 = Error;
                    text5 = `Nth out of range: ${tmp251}`;
                    error14 = new Error(`Nth out of range: ${tmp251}`);
                    throw error14;
                  }
                }
                if ("until" === obj.symbol) {
                  _Date3 = Date;
                  parsed9 = Date.parse(obj.text);
                  if (parsed9) {
                    _Date4 = Date;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    _Error8 = Error;
                    text2 = obj.text;
                    text6 = `Cannot parse until date:${text2}`;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    _parseInt3 = parseInt;
                    parsed10 = parseInt(obj.value[0], 10);
                    obj.count = parsed10;
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "sunday":
              obj.freq = constants.WEEKLY;
              str10 = obj.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                acceptResult = obj.accept("comma");
                if (acceptResult) {
                  isDoneResult = obj.isDone();
                  while (!isDoneResult) {
                    symbol2 = obj.symbol;
                    if ("monday" !== symbol2) {
                      if ("tuesday" !== symbol2) {
                        if ("wednesday" !== symbol2) {
                          if ("thursday" !== symbol2) {
                            if ("friday" !== symbol2) {
                              if ("saturday" !== symbol2) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                arr = byweekday.push(constants[flag4]);
                                nextSymbolResult2 = obj.nextSymbol();
                                acceptResult1 = obj.accept("comma");
                              } else {
                                tmp51 = globalThis;
                                _Error4 = Error;
                                symbol3 = obj.symbol;
                                str22 = "Unexpected symbol ";
                                text = `Unexpected symbol ${symbol3}`;
                                tmp53 = new.target;
                                str23 = ", expected weekday";
                                text1 = `Unexpected symbol ${symbol3}, expected weekday`;
                                tmp55 = new.target;
                                error10 = new Error(`Unexpected symbol ${symbol3}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  _Error9 = Error;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                obj.accept("on");
                obj.accept("the");
                symbol4 = obj.symbol;
                if ("last" === symbol4) {
                  obj.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol4) {
                  obj.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol4) {
                  obj.nextSymbol();
                  acceptResult4 = obj.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol4) {
                  obj.nextSymbol();
                  acceptResult5 = obj.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol4) {
                    _parseInt13 = parseInt;
                    parsed7 = parseInt(obj.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        obj.nextSymbol();
                        acceptResult6 = obj.accept("last");
                        tmp66 = parsed7;
                        if (acceptResult6) {
                          tmp66 = -parsed7;
                        }
                        flag5 = tmp66;
                      }
                    }
                    _Error5 = Error;
                    text2 = `Nth out of range: ${tmp250}`;
                    error12 = new Error(`Nth out of range: ${tmp250}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  obj.nextSymbol();
                  acceptResult7 = obj.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol5 = obj.symbol;
                      if ("last" === symbol5) {
                        nextSymbolResult9 = obj.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol5) {
                        nextSymbolResult10 = obj.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol5) {
                        nextSymbolResult11 = obj.nextSymbol();
                        acceptResult8 = obj.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol5) {
                        nextSymbolResult12 = obj.nextSymbol();
                        acceptResult9 = obj.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol5) {
                          _parseInt14 = parseInt;
                          parsed8 = parseInt(obj.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            nextSymbolResult13 = obj.nextSymbol();
                            acceptResult10 = obj.accept("last");
                            tmp83 = parsed8;
                            if (acceptResult10) {
                              tmp83 = -parsed8;
                            }
                            flag6 = tmp83;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        arr1 = bymonthday.push(flag6);
                        nextSymbolResult14 = obj.nextSymbol();
                        acceptResult11 = obj.accept("comma");
                      } else {
                        _Error7 = Error;
                        symbol6 = obj.symbol;
                        str33 = "Unexpected symbol ";
                        text3 = `Unexpected symbol ${symbol6}`;
                        tmp96 = new.target;
                        str34 = "; expected monthday";
                        text4 = `Unexpected symbol ${symbol6}; expected monthday`;
                        tmp98 = new.target;
                        error13 = new Error(`Unexpected symbol ${symbol6}; expected monthday`);
                        throw error13;
                      }
                    }
                    _Error6 = Error;
                    text5 = `Nth out of range: ${tmp251}`;
                    error14 = new Error(`Nth out of range: ${tmp251}`);
                    throw error14;
                  }
                }
                if ("until" === obj.symbol) {
                  _Date3 = Date;
                  parsed9 = Date.parse(obj.text);
                  if (parsed9) {
                    _Date4 = Date;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    _Error8 = Error;
                    text2 = obj.text;
                    text6 = `Cannot parse until date:${text2}`;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    _parseInt3 = parseInt;
                    parsed10 = parseInt(obj.value[0], 10);
                    obj.count = parsed10;
                    obj.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            case "january":
              obj.freq = constants.YEARLY;
              let flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  let items4 = [flag2];
                  obj.bymonth = items4;
                  let nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    let acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      let isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        let flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              let bymonth = obj.bymonth;
                              let arr2 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj.nextSymbol();
                              let acceptResult14 = obj.accept("comma");
                            } else {
                              let tmp14 = globalThis;
                              let _Error = Error;
                              let symbol = obj.symbol;
                              let str3 = "Unexpected symbol ";
                              let text7 = `Unexpected symbol ${symbol}`;
                              let tmp16 = new.target;
                              let str4 = ", expected month";
                              let text8 = `Unexpected symbol ${symbol}, expected month`;
                              let tmp18 = new.target;
                              let error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      let _Error3 = Error;
                      let error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      let _Date = Date;
                      let parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj.text;
                        let text9 = `Cannot parse until date:${text}`;
                        let error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let _parseInt2 = parseInt;
                        let parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "february":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "march":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "april":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "may":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "june":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "july":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "august":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "september":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "october":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "november":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            case "december":
              obj.freq = constants.YEARLY;
              flag2 = 12;
              switch (tmp9) {
                case "january":
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj.accept("comma");
                    if (acceptResult13) {
                      isDoneResult1 = obj.isDone();
                      while (!isDoneResult1) {
                        flag3 = 12;
                        switch (tmp13) {
                          case "january":
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              arr2 = bymonth.push(flag3);
                              nextSymbolResult16 = obj.nextSymbol();
                              acceptResult14 = obj.accept("comma");
                            } else {
                              tmp14 = globalThis;
                              _Error = Error;
                              symbol = obj.symbol;
                              str3 = "Unexpected symbol ";
                              text7 = `Unexpected symbol ${symbol}`;
                              tmp16 = new.target;
                              str4 = ", expected month";
                              text8 = `Unexpected symbol ${symbol}, expected month`;
                              tmp18 = new.target;
                              error16 = new Error(`Unexpected symbol ${symbol}, expected month`);
                              throw error16;
                            }
                            break;
                          case "february":
                            flag3 = 2;
                            break;
                          case "march":
                            flag3 = 3;
                            break;
                          case "april":
                            flag3 = 4;
                            break;
                          case "may":
                            flag3 = 5;
                            break;
                          case "june":
                            flag3 = 6;
                            break;
                          case "july":
                            flag3 = 7;
                            break;
                          case "august":
                            flag3 = 8;
                            break;
                          case "september":
                            flag3 = 9;
                            break;
                          case "october":
                            flag3 = 10;
                            break;
                          case "november":
                            flag3 = 11;
                            break;
                          case "december":
                            break;
                          default:
                            flag3 = false;
                        }
                      }
                      _Error3 = Error;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    if ("until" === obj.symbol) {
                      _Date = Date;
                      parsed11 = Date.parse(obj.text);
                      if (parsed11) {
                        _Date2 = Date;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        _Error2 = Error;
                        text = obj.text;
                        text9 = `Cannot parse until date:${text}`;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      acceptResult15 = obj.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        _parseInt2 = parseInt;
                        parsed12 = parseInt(obj.value[0], 10);
                        obj.count = parsed12;
                        obj.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                case "february":
                  flag2 = 2;
                  break;
                case "march":
                  flag2 = 3;
                  break;
                case "april":
                  flag2 = 4;
                  break;
                case "may":
                  flag2 = 5;
                  break;
                case "june":
                  flag2 = 6;
                  break;
                case "july":
                  flag2 = 7;
                  break;
                case "august":
                  flag2 = 8;
                  break;
                case "september":
                  flag2 = 9;
                  break;
                case "october":
                  flag2 = 10;
                  break;
                case "november":
                  flag2 = 11;
                  break;
                case "december":
                  break;
                default:
                  flag2 = false;
              }
              break;
            default:
              const _Error19 = Error;
              const error19 = new Error("Unknown symbol");
              throw error19;
          }
        }
      }
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function rt(arg0) {
    const items = [];
    const keys = Object.keys(arg0);
    let num = 0;
    if (0 < keys.length) {
      while (typeof p === "function") {
        if (typeof f === "function") {
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp7 = null != arr3;
              let tmp8 = !tmp7;
              if (tmp7) {
                tmp8 = 0 === arr3.length;
              }
              let tmp9 = !tmp8 && -1 !== arr3.indexOf(tmp);
              if (!tmp9) {
                let arr = items.push(tmp);
              }
              if (typeof E === "function") {
                let _Date = Date;
                let tmp13 = tmp12 instanceof Date;
                if (tmp13) {
                  let obj = arg0[tmp];
                  if (typeof T === "function") {
                    if (typeof tmp11 === "function") {
                      let _Date2 = Date;
                      let tmp15 = obj instanceof Date;
                      if (tmp15) {
                        let _isNaN = isNaN;
                        tmp15 = !isNaN(obj.getTime());
                      }
                      tmp13 = !tmp15;
                    } else {
                      let str9 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let str8 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                if (tmp13) {
                  arr = items.push(tmp);
                }
                num = num + 1;
              } else {
                let str7 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              let str6 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str5 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str4 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    if (items.length) {
      const _Error = Error;
      const error = new Error("Invalid options: " + items.join(", "));
      throw error;
    } else {
      return closure_38({}, arg0);
    }
  }
  function at(arg0) {
    const obj = {};
    const match = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(arg0);
    if (match) {
      if (match[1]) {
        obj.tzid = tmp2;
      }
      if (typeof A === "function") {
        const match1 = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(tmp3);
        if (match1) {
          const _Date = Date;
          const _parseInt = parseInt;
          const parsed = parseInt(match1[1], 10);
          const _parseInt2 = parseInt;
          const diff = parseInt(match1[2], 10) - 1;
          const _parseInt3 = parseInt;
          const parsed1 = parseInt(match1[3], 10);
          const _parseInt4 = parseInt;
          const tmp14 = parseInt(match1[5], 10) || 0;
          const _parseInt5 = parseInt;
          const tmp15 = parseInt(match1[6], 10) || 0;
          const _parseInt6 = parseInt;
          const tmp16 = parseInt(match1[7], 10) || 0;
          date = new Date(Date.UTC(parsed, diff, parsed1, tmp14, tmp15, tmp16));
          obj.dtstart = date;
          return obj;
        } else {
          const _Error = Error;
          const concat = "Invalid UNTIL value: ".concat;
          const error = new Error("Invalid UNTIL value: ".concat(tmp3));
          throw error;
        }
        obj3 = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      return obj;
    }
    obj2 = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i;
  }
  function st(str) {
    const replaced = str.replace(/^\s+|\s+$/, "");
    if (replaced.length) {
      let match = /^([A-Z]+?)[:;]/.exec(replaced.toUpperCase());
      if (match) {
        let formatted = str3.toUpperCase();
        if ("RRULE" !== formatted) {
          if ("EXRULE" !== formatted) {
            if ("DTSTART" === formatted) {
              return at(replaced);
            } else {
              let _Error = Error;
              let concat = "Unsupported RFC prop ".concat;
              const combined = "Unsupported RFC prop ".concat(str3, " in ");
              let error = new Error(combined.concat(replaced));
              throw error;
            }
          }
        }
        closure_129_0 = replaced;
        const tmp14 = at(replaced.replace(/^RRULE:/i, ""));
        closure_129_1 = tmp14;
        let parts = replaced.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
        const item = parts.forEach((item) => {
          const parts = item.split("=");
          [str, str2] = parts;
          switch (str.toUpperCase()) {
            case "FREQ":
              closure_1.freq = obj3[str2.toUpperCase(str2)];
              break;
            case "WKST":
              closure_1.wkst = closure_2_69[str2.toUpperCase(str2)];
              break;
            case "COUNT":
              let index = str2.indexOf(",");
              if (-1 !== index) {
                let parts1 = str2.split(",");
                let mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                let isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  let _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              let formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "INTERVAL":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYSETPOS":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYMONTH":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYMONTHDAY":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYYEARDAY":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYWEEKNO":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYHOUR":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYMINUTE":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYSECOND":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYWEEKDAY":
              let parts2 = str2.split(",");
              fn = (str) => {
                if (2 === str.length) {
                  return closure_1_69[str];
                } else {
                  const match = str.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                  if (match) {
                    if (match.length >= 3) {
                      const _Number = Number;
                      const NumberResult = Number(match[1]);
                      if (typeof closure_1_2 === "function") {
                        const obj = {};
                        if (0 === NumberResult) {
                          const _Error = Error;
                          const error = new Error("Can't create weekday with n == 0");
                          throw error;
                        } else {
                          obj.weekday = tmp4;
                          obj.n = NumberResult;
                          return obj;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  const _SyntaxError = SyntaxError;
                  const concat = "Invalid weekday string: ".concat;
                  const syntaxError = new SyntaxError("Invalid weekday string: ".concat(str));
                  throw syntaxError;
                }
              };
              let mapped1 = parts2.map(fn);
              closure_1.byweekday = mapped1;
              break;
            case "BYDAY":
              parts2 = str2.split(",");
              fn = (str) => {
                if (2 === str.length) {
                  return closure_1_69[str];
                } else {
                  const match = str.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                  if (match) {
                    if (match.length >= 3) {
                      const _Number = Number;
                      const NumberResult = Number(match[1]);
                      if (typeof closure_1_2 === "function") {
                        const obj = {};
                        if (0 === NumberResult) {
                          const _Error = Error;
                          const error = new Error("Can't create weekday with n == 0");
                          throw error;
                        } else {
                          obj.weekday = tmp4;
                          obj.n = NumberResult;
                          return obj;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  const _SyntaxError = SyntaxError;
                  const concat = "Invalid weekday string: ".concat;
                  const syntaxError = new SyntaxError("Invalid weekday string: ".concat(str));
                  throw syntaxError;
                }
              };
              mapped1 = parts2.map(fn);
              closure_1.byweekday = mapped1;
              break;
            case "DTSTART":
              let tmp28 = at(replaced);
              closure_1.tzid = tmp28.tzid;
              closure_1.dtstart = tmp28.dtstart;
              break;
            case "TZID":
              tmp28 = at(replaced);
              closure_1.tzid = tmp28.tzid;
              closure_1.dtstart = tmp28.dtstart;
              break;
            case "UNTIL":
              if (typeof A === "function") {
                let match = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(str2);
                if (match) {
                  const _Date = Date;
                  const _parseInt = parseInt;
                  const parsed = parseInt(match[1], 10);
                  const _parseInt2 = parseInt;
                  const diff = parseInt(match[2], 10) - 1;
                  const _parseInt3 = parseInt;
                  const parsed1 = parseInt(match[3], 10);
                  const _parseInt4 = parseInt;
                  let num3 = parseInt(match[5], 10);
                  if (!num3) {
                    num3 = 0;
                  }
                  const _parseInt5 = parseInt;
                  let num4 = parseInt(match[6], 10);
                  if (!num4) {
                    num4 = 0;
                  }
                  const _parseInt6 = parseInt;
                  let num5 = parseInt(match[7], 10);
                  if (!num5) {
                    num5 = 0;
                  }
                  date = new Date(Date.UTC(parsed, diff, parsed1, num3, num4, num5));
                  tmp4.until = date;
                } else {
                  let _Error = Error;
                  let concat = "Invalid UNTIL value: ".concat;
                  let error = new Error("Invalid UNTIL value: ".concat(str2));
                  throw error;
                }
                let obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              break;
            case "BYEASTER":
              let _Number = Number;
              closure_1.byeaster = Number(str2);
              break;
            default:
              const _Error2 = Error;
              const error1 = new Error("Unknown RRULE property '" + str + "'");
              throw error1;
          }
        });
        return tmp14;
      } else {
        const tmp4 = at(replaced.replace(/^RRULE:/i, ""));
        closure_1 = tmp4;
        let parts1 = replaced.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
        const item1 = parts1.forEach((item) => {
          const parts = item.split("=");
          [str, str2] = parts;
          switch (str.toUpperCase()) {
            case "FREQ":
              closure_1.freq = obj3[str2.toUpperCase(str2)];
              break;
            case "WKST":
              closure_1.wkst = closure_2_69[str2.toUpperCase(str2)];
              break;
            case "COUNT":
              let index = str2.indexOf(",");
              if (-1 !== index) {
                let parts1 = str2.split(",");
                let mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                let isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  let _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              let formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "INTERVAL":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYSETPOS":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYMONTH":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYMONTHDAY":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYYEARDAY":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYWEEKNO":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYHOUR":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYMINUTE":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYSECOND":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(ht);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
              break;
            case "BYWEEKDAY":
              let parts2 = str2.split(",");
              fn = (str) => {
                if (2 === str.length) {
                  return closure_1_69[str];
                } else {
                  const match = str.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                  if (match) {
                    if (match.length >= 3) {
                      const _Number = Number;
                      const NumberResult = Number(match[1]);
                      if (typeof closure_1_2 === "function") {
                        const obj = {};
                        if (0 === NumberResult) {
                          const _Error = Error;
                          const error = new Error("Can't create weekday with n == 0");
                          throw error;
                        } else {
                          obj.weekday = tmp4;
                          obj.n = NumberResult;
                          return obj;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  const _SyntaxError = SyntaxError;
                  const concat = "Invalid weekday string: ".concat;
                  const syntaxError = new SyntaxError("Invalid weekday string: ".concat(str));
                  throw syntaxError;
                }
              };
              let mapped1 = parts2.map(fn);
              closure_1.byweekday = mapped1;
              break;
            case "BYDAY":
              parts2 = str2.split(",");
              fn = (str) => {
                if (2 === str.length) {
                  return closure_1_69[str];
                } else {
                  const match = str.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                  if (match) {
                    if (match.length >= 3) {
                      const _Number = Number;
                      const NumberResult = Number(match[1]);
                      if (typeof closure_1_2 === "function") {
                        const obj = {};
                        if (0 === NumberResult) {
                          const _Error = Error;
                          const error = new Error("Can't create weekday with n == 0");
                          throw error;
                        } else {
                          obj.weekday = tmp4;
                          obj.n = NumberResult;
                          return obj;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  const _SyntaxError = SyntaxError;
                  const concat = "Invalid weekday string: ".concat;
                  const syntaxError = new SyntaxError("Invalid weekday string: ".concat(str));
                  throw syntaxError;
                }
              };
              mapped1 = parts2.map(fn);
              closure_1.byweekday = mapped1;
              break;
            case "DTSTART":
              let tmp28 = at(replaced);
              closure_1.tzid = tmp28.tzid;
              closure_1.dtstart = tmp28.dtstart;
              break;
            case "TZID":
              tmp28 = at(replaced);
              closure_1.tzid = tmp28.tzid;
              closure_1.dtstart = tmp28.dtstart;
              break;
            case "UNTIL":
              if (typeof A === "function") {
                let match = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(str2);
                if (match) {
                  const _Date = Date;
                  const _parseInt = parseInt;
                  const parsed = parseInt(match[1], 10);
                  const _parseInt2 = parseInt;
                  const diff = parseInt(match[2], 10) - 1;
                  const _parseInt3 = parseInt;
                  const parsed1 = parseInt(match[3], 10);
                  const _parseInt4 = parseInt;
                  let num3 = parseInt(match[5], 10);
                  if (!num3) {
                    num3 = 0;
                  }
                  const _parseInt5 = parseInt;
                  let num4 = parseInt(match[6], 10);
                  if (!num4) {
                    num4 = 0;
                  }
                  const _parseInt6 = parseInt;
                  let num5 = parseInt(match[7], 10);
                  if (!num5) {
                    num5 = 0;
                  }
                  date = new Date(Date.UTC(parsed, diff, parsed1, num3, num4, num5));
                  tmp4.until = date;
                } else {
                  let _Error = Error;
                  let concat = "Invalid UNTIL value: ".concat;
                  let error = new Error("Invalid UNTIL value: ".concat(str2));
                  throw error;
                }
                let obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              break;
            case "BYEASTER":
              let _Number = Number;
              closure_1.byeaster = Number(str2);
              break;
            default:
              const _Error2 = Error;
              const error1 = new Error("Unknown RRULE property '" + str + "'");
              throw error1;
          }
        });
        return tmp4;
      }
      let obj = /^([A-Z]+?)[:;]/;
    } else {
      return null;
    }
  }
  function ht(arg0) {
    let NumberResult = arg0;
    if (obj.test(arg0)) {
      const _Number = Number;
      NumberResult = Number(arg0);
    }
    return NumberResult;
  }
  function ct(tzid) {
    const items = [];
    const keys = Object.keys(tzid);
    const keys1 = Object.keys(closure_1_70);
    let str = "";
    let num = 0;
    let str2 = "";
    let str3 = "";
    if (0 < keys.length) {
      while (true) {
        let tmp3 = str2;
        if ("tzid" !== keys[num]) {
          if (typeof p === "function") {
            if (typeof f !== "function") {
              break;
            } else if (typeof l === "function") {
              if (typeof i === "function") {
                let tmp7 = null != keys1;
                let tmp8 = !tmp7;
                if (tmp7) {
                  tmp8 = 0 === keys1.length;
                }
                let tmp9 = !tmp8 && -1 !== keys1.indexOf(tmp40);
                tmp3 = str2;
                if (tmp9) {
                  let str4 = keys[num];
                  let formatted = str4.toUpperCase();
                  let str5 = tzid[keys[num]];
                  if (typeof tmp6 === "function") {
                    tmp3 = str2;
                    if (null != str5) {
                      let tmp41 = isArray;
                      if (!isArray(str5)) {
                        if ("FREQ" === formatted) {
                          let str1 = constants.FREQUENCIES[tzid.freq];
                          let str6 = formatted;
                          let tmp12 = str2;
                        } else if ("WKST" === formatted) {
                          if (typeof o === "function") {
                            if (typeof str5 === "number") {
                              let tmp34 = new.target;
                              if (typeof closure_2 === "function") {
                                let obj = { weekday: str5, n: undefined };
                                str = obj.toString();
                              } else {
                                let str20 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              str = str5.toString();
                            }
                            str1 = str;
                            str6 = formatted;
                            tmp12 = str2;
                          } else {
                            let str19 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else if ("BYWEEKDAY" === formatted) {
                          let arr6 = str5;
                          if (!tmp41(str5)) {
                            let items1 = [str5];
                            arr6 = items1;
                          }
                          let str10 = arr6.map((weekday) => {
                            let tmp2 = weekday;
                            if (!(weekday instanceof closure_1_2)) {
                              if (isArray(weekday)) {
                                if (typeof tmp === "function") {
                                  let obj = {};
                                  if (0 === tmp6) {
                                    const _Error = Error;
                                    const error = new Error("Can't create weekday with n == 0");
                                    throw error;
                                  } else {
                                    obj.weekday = tmp5;
                                    obj.n = tmp6;
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else if (typeof tmp === "function") {
                                obj = { weekday, n: undefined };
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                              tmp2 = obj;
                            }
                            return tmp2;
                          });
                          str1 = str10.toString();
                          str6 = "BYDAY";
                          tmp12 = str2;
                        } else if ("DTSTART" === formatted) {
                          let text = str;
                          if (str5) {
                            let _Date2 = Date;
                            let tmp23 = new.target;
                            let tmp24 = new.target;
                            date = new Date(str5);
                            let tmp26 = new.target;
                            if (typeof closure_55 === "function") {
                              obj = {};
                              let _isNaN = isNaN;
                              if (isNaN(date.getTime())) {
                                let _RangeError = RangeError;
                                let tmp28 = new.target;
                                let str9 = "Invalid date passed to DateWithZone";
                                let tmp29 = new.target;
                                let rangeError = new RangeError("Invalid date passed to DateWithZone");
                                throw rangeError;
                              } else {
                                obj.date = date;
                                obj.tzid = tmp20;
                                text = `DTSTART${obj3.toString()}`;
                              }
                            } else {
                              let str18 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          tmp12 = text;
                          str1 = str;
                          str6 = formatted;
                        } else if ("UNTIL" === formatted) {
                          tzid = tzid.tzid;
                          let tmp14 = !tzid;
                          if (typeof N === "function") {
                            let _Date = Date;
                            let tmp15 = new.target;
                            let tmp16 = new.target;
                            let date1 = new Date(str5);
                            let str7 = date1.getUTCFullYear();
                            let items2 = [
                              y(str7.toString(), 4, "0"),
                              y(date1.getUTCMonth() + 1, 2, "0"),
                              y(date1.getUTCDate(), 2, "0"),
                              "T",
                              y(date1.getUTCHours(), 2, "0"),
                              y(date1.getUTCMinutes(), 2, "0"),
                              y(date1.getUTCSeconds(), 2, "0"),
                            ];
                            let str8 = str;
                            if (!tzid) {
                              str8 = "Z";
                            }
                            items2[7] = str8;
                            str1 = items2.join(str);
                            str6 = formatted;
                            tmp12 = str2;
                          } else {
                            let str17 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else if (tmp41(str5)) {
                          let items3 = [];
                          let num2 = 0;
                          if (0 < str5.length) {
                            do {
                              let _String2 = String;
                              items3[num2] = String(str5[num2]);
                              num2 = num2 + 1;
                              length = str5.length;
                            } while (num2 < length);
                          }
                          str1 = items3.toString();
                          str6 = formatted;
                          tmp12 = str2;
                        } else {
                          let _String = String;
                          str1 = String(str5);
                          str6 = formatted;
                          tmp12 = str2;
                        }
                        tmp3 = tmp12;
                        if (str1) {
                          let items4 = [str6, str1];
                          let arr = items.push(items4);
                          tmp3 = tmp12;
                        }
                      } else {
                        tmp3 = str2;
                      }
                    }
                  } else {
                    let str16 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              } else {
                let str15 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              let str14 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str12 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        num = num + 1;
        str2 = tmp3;
        str3 = tmp3;
      }
      throw new TypeError("Trying to call a non-function");
    }
    const mapped = items.map((item) => {
      const combined = "".concat(item[0], "=");
      return combined.concat(item[1].toString());
    });
    const joined = mapped.join(";");
    if (str !== joined) {
      const concat = "RRULE:".concat;
      str = "RRULE:".concat(joined);
    }
    const items5 = [str3, str];
    const found = items5.filter((item) => item);
    return found.join("\n");
  }
  function At(getValue, count) {
    ({ freq, until, bysetpos } = count);
    if (0 !== count.count) {
      if (0 !== count.interval) {
        date = closure_50.fromDate(tmp);
        if (typeof closure_67 === "function") {
          obj.options = count;
          obj.rebuild(date.year, date.month);
          ({ freq: freq2, byhour, byminute, bysecond } = count);
          let tmp3 = obj3;
          if (freq2 >= obj3.HOURLY) {
            if (freq2 >= constants.HOURLY) {
              if (typeof f === "function") {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp8 = !tmp7;
                    if (null != byhour) {
                      tmp8 = 0 === byhour.length;
                    }
                    if (!tmp8) {
                      if (typeof p === "function") {
                        if (typeof tmp41 === "function") {
                          if (typeof tmp4 === "function") {
                            if (typeof tmp5 === "function") {
                              let tmp12 = !tmp11;
                              if (null != byhour) {
                                tmp12 = 0 === byhour.length;
                              }
                              let tmp13 = !tmp12;
                              if (tmp13) {
                                tmp13 = -1 !== byhour.indexOf(tmp10);
                              }
                              tmp3 = globalThis;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    const items = [];
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (freq2 >= constants.MINUTELY) {
              if (typeof f === "function") {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp18 = !tmp17;
                    if (null != byminute) {
                      tmp18 = 0 === byminute.length;
                    }
                    if (!tmp18) {
                      if (typeof p === "function") {
                        if (typeof tmp42 === "function") {
                          if (typeof tmp14 === "function") {
                            if (typeof tmp15 === "function") {
                              let tmp22 = !tmp21;
                              if (null != byminute) {
                                tmp22 = 0 === byminute.length;
                              }
                              let tmp23 = !tmp22;
                              if (tmp23) {
                                tmp23 = -1 !== byminute.indexOf(tmp20);
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (freq2 >= constants.SECONDLY) {
              if (typeof f === "function") {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp28 = !tmp27;
                    if (null != bysecond) {
                      tmp28 = 0 === bysecond.length;
                    }
                    if (!tmp28) {
                      if (typeof p === "function") {
                        if (typeof tmp43 === "function") {
                          if (typeof tmp24 === "function") {
                            if (typeof tmp25 === "function") {
                              let tmp32 = !tmp31;
                              if (null != bysecond) {
                                tmp32 = 0 === bysecond.length;
                              }
                              let tmp33 = !tmp32;
                              if (tmp33) {
                                tmp33 = -1 !== bysecond.indexOf(tmp30);
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            obj.gettimeset(freq2)(date.hour, date.minute, date.second, date.millisecond);
          }
          byminute = count;
          const dtstart = count.dtstart;
          closure_1 = dtstart.getTime() % 1000;
          if (count.freq < tmp3.HOURLY) {
            const items1 = [];
            byhour = count.byhour;
            let item = byhour.forEach((item) => {
              byminute = item;
              byminute = byminute.byminute;
              item = byminute.forEach((item) => {
                const bysecond = item.bysecond;
                item = bysecond.forEach((item) => {
                  let num = closure_1;
                  if (typeof closure_49 === "function") {
                    const obj = { hour: tmp3, minute: tmp4, second: item };
                    if (!num) {
                      num = 0;
                    }
                    obj.millisecond = num;
                    tmp2(obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
              });
            });
            let items2 = items1;
          } else {
            items2 = [];
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    return getValue.getValue();
  }
  function Bt(str, arg1) {
    let sum;
    let obj = arg1;
    if (undefined === arg1) {
      obj = {};
    }
    let items = [];
    const keys = Object.keys(obj);
    let tzid = Object.keys(closure_73);
    let item = keys.forEach((item) => {
      let arr = closure_1;
      if (typeof p === "function") {
        if (typeof f === "function") {
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp6 = !tmp5;
              if (null != arr) {
                tmp6 = 0 === arr.length;
              }
              let tmp8 = !tmp6;
              if (tmp8) {
                tmp8 = -1 !== arr.indexOf(item);
              }
              if (!tmp8) {
                arr = items.push(item);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
    if (items.length) {
      let _Error2 = Error;
      let error = new Error("Invalid options: " + items.join(", "));
      throw error;
    } else {
      const tmp5 = closure_38(closure_38({}, closure_73), obj);
      closure_129_0 = undefined;
      closure_129_1 = undefined;
      closure_129_2 = undefined;
      closure_129_3 = undefined;
      closure_130_4 = undefined;
      const items1 = [];
      closure_130_0 = items1;
      closure_130_1 = [];
      const items2 = [];
      closure_130_2 = items2;
      closure_130_3 = [];
      ({ dtstart, tzid: closure_130_4 } = at(str));
      let flag = tmp5.unfold;
      if (undefined === flag) {
        flag = false;
      }
      if (str) {
        str = str.trim();
      }
      if (str) {
        const split = str.split;
        if (flag) {
          let parts = split("\n");
          let num3 = 0;
          let parts1 = parts;
          if (0 < parts.length) {
            do {
              let str6 = parts[num3];
              let replaced = str6.replace(/\s+$/g, "");
              parts[num3] = replaced;
              if (replaced) {
                if (0 < num3) {
                  if (" " === replaced[0]) {
                    let diff = num3 - 1;
                    parts[diff] = parts[diff] + replaced.slice(1);
                    let spliceResult = parts.splice(num3, 1);
                    sum = num3;
                  }
                }
                sum = num3 + 1;
              } else {
                let spliceResult1 = parts.splice(num3, 1);
                sum = num3;
              }
              num3 = sum;
              parts1 = parts;
            } while (sum < parts.length);
          }
        } else {
          parts1 = split(/\s/);
        }
        let item1 = parts1.forEach((value) => {
          if (value) {
            if (-1 === value.indexOf(":")) {
              let obj = { name: "RRULE", value };
            } else {
              const parts = value.split(":");
              const substr = parts.slice(0, 1);
              const substr1 = parts.slice(1);
              items = [substr1.join(":")];
              const combined = substr.concat(items);
              obj = { name: null, value: null };
              [obj3.name, obj3.value] = combined;
            }
            ({ name, value } = obj);
            const parts1 = name.split(";");
            if (parts1) {
              const str5 = parts1[0].toUpperCase();
              const substr2 = parts1.slice(1);
              const formatted = str5.toUpperCase();
              if ("RRULE" === formatted) {
                if (substr2.length) {
                  const _Error3 = Error;
                  const concat2 = "unsupported RRULE parm: ".concat;
                  let error = new Error("unsupported RRULE parm: ".concat(substr2.join(",")));
                  throw error;
                } else {
                  const parts2 = value.split("\n");
                  const mapped = parts2.map(st);
                  const found = mapped.filter((item) => null !== item);
                  items.push(closure_38(closure_38({}, found[0]), found[1]));
                }
              } else if ("RDATE" === formatted) {
                let match = /RDATE(?:;TZID=([^:=]+))?/i.exec(value);
                if (null === match) {
                  match = [];
                }
                let tmp22 = tmp21;
                if (match[1]) {
                  tmp22 = !closure_4;
                }
                if (tmp22) {
                  closure_4 = tmp21;
                }
                const item = substr2.forEach((item) => {
                  if (!obj.test(item)) {
                    const _Error = Error;
                    const error = new Error("unsupported RDATE/EXDATE parm: " + item);
                    throw error;
                  }
                  obj = /(VALUE=DATE(-TIME)?)|(TZID=)/;
                });
                const parts3 = value.split(",");
                tzid = tzid.concat(
                  parts3.map((item) => {
                    if (typeof closure_1_34 === "function") {
                      const match = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(item);
                      if (match) {
                        const _Date = Date;
                        const _parseInt = parseInt;
                        const parsed = parseInt(match[1], 10);
                        const _parseInt2 = parseInt;
                        const diff = parseInt(match[2], 10) - 1;
                        const _parseInt3 = parseInt;
                        const parsed1 = parseInt(match[3], 10);
                        const _parseInt4 = parseInt;
                        const tmp11 = parseInt(match[5], 10) || 0;
                        const _parseInt5 = parseInt;
                        const tmp12 = parseInt(match[6], 10) || 0;
                        const _parseInt6 = parseInt;
                        const tmp13 = parseInt(match[7], 10) || 0;
                        date = new Date(Date.UTC(parsed, diff, parsed1, tmp11, tmp12, tmp13));
                        return date;
                      } else {
                        const _Error = Error;
                        const concat = "Invalid UNTIL value: ".concat;
                        const error = new Error("Invalid UNTIL value: ".concat(item));
                        throw error;
                      }
                      const obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }),
                );
                const obj5 = /RDATE(?:;TZID=([^:=]+))?/i;
              } else if ("EXRULE" === formatted) {
                if (substr2.length) {
                  const _Error2 = Error;
                  let concat = "unsupported EXRULE parm: ".concat;
                  const error1 = new Error("unsupported EXRULE parm: ".concat(substr2.join(",")));
                  throw error1;
                } else {
                  const parts4 = value.split("\n");
                  const mapped1 = parts4.map(st);
                  const found1 = mapped1.filter((item) => null !== item);
                  closure_1_2.push(closure_38(closure_38({}, found1[0]), found1[1]));
                }
              } else if ("EXDATE" === formatted) {
                const item1 = substr2.forEach((item) => {
                  if (!obj.test(item)) {
                    const _Error = Error;
                    const error = new Error("unsupported RDATE/EXDATE parm: " + item);
                    throw error;
                  }
                  obj = /(VALUE=DATE(-TIME)?)|(TZID=)/;
                });
                const parts5 = value.split(",");
                closure_3 = closure_3.concat(
                  parts5.map((item) => {
                    if (typeof closure_1_34 === "function") {
                      const match = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(item);
                      if (match) {
                        const _Date = Date;
                        const _parseInt = parseInt;
                        const parsed = parseInt(match[1], 10);
                        const _parseInt2 = parseInt;
                        const diff = parseInt(match[2], 10) - 1;
                        const _parseInt3 = parseInt;
                        const parsed1 = parseInt(match[3], 10);
                        const _parseInt4 = parseInt;
                        const tmp11 = parseInt(match[5], 10) || 0;
                        const _parseInt5 = parseInt;
                        const tmp12 = parseInt(match[6], 10) || 0;
                        const _parseInt6 = parseInt;
                        const tmp13 = parseInt(match[7], 10) || 0;
                        date = new Date(Date.UTC(parsed, diff, parsed1, tmp11, tmp12, tmp13));
                        return date;
                      } else {
                        const _Error = Error;
                        const concat = "Invalid UNTIL value: ".concat;
                        const error = new Error("Invalid UNTIL value: ".concat(item));
                        throw error;
                      }
                      const obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }),
                );
              } else if ("DTSTART" !== formatted) {
                const _Error4 = Error;
                const error2 = new Error("unsupported property: " + str5);
                throw error2;
              }
            } else {
              let _Error = Error;
              const error3 = new Error("empty property name");
              throw error3;
            }
          }
        });
        closure_129_0 = dtstart;
        closure_129_1 = closure_130_4;
        closure_129_2 = tmp19;
        if (tmp5.compatible) {
          tmp5.forceset = true;
          tmp5.unfold = true;
        }
        if (!tmp5.forceset) {
          if (items1.length <= 1) {
            if (!arr8.length) {
              if (!items2.length) {
                if (!arr9.length) {
                  const tmp20 = items1[0] || {};
                  let dtstart2 = tmp20.dtstart;
                  let tmp21 = closure_72;
                  if (!dtstart2) {
                    dtstart2 = tmp5.dtstart;
                  }
                  if (!dtstart2) {
                    dtstart2 = dtstart;
                  }
                  obj = { dtstart: dtstart2, tzid: tmp20.tzid || tmp5.tzid || tmp18 };
                  let tmp24 = new.target;
                  tmp21 = new tmp21(closure_38(closure_38({}, tmp20), obj), tmp19);
                  let tmp22 = tmp20.tzid || tmp5.tzid || tmp18;
                }
                return tmp24;
              }
            }
          }
        }
        if (typeof closure_76 === "function") {
          const call = closure_200_0.call;
          obj = {};
          if (typeof call === "unknown") {
            tmp30(obj, tmp19);
          } else {
            let callResult = call(tmp29, obj, tmp19);
          }
          if (!callResult) {
            callResult = tmp29;
          }
          callResult.dtstart = Gt.apply(callResult, ["dtstart"]);
          callResult.tzid = Gt.apply(callResult, ["tzid"]);
          callResult._rrule = [];
          callResult._rdate = [];
          callResult._exrule = [];
          callResult._exdate = [];
          closure_129_3 = callResult;
          callResult.dtstart(dtstart);
          callResult.tzid(tmp18);
          const item2 = items1.forEach((item) => {
            new constants(closure_38(closure_38({}, item), { dtstart: items, tzid }), closure_1_2);
            closure_3.rrule(new.target);
          });
          const item3 = arr8.forEach((item) => {
            closure_3.rdate(item);
          });
          const item4 = items2.forEach((item) => {
            new constants(closure_38(closure_38({}, item), { dtstart: items, tzid }), closure_1_2);
            closure_3.exrule(new.target);
          });
          const item5 = arr9.forEach((item) => {
            closure_3.exdate(item);
          });
          tmp24 = callResult;
          if (tmp40) {
            callResult.rdate(dtstart);
            tmp24 = callResult;
          }
          tmp30 = closure_200_0;
          tmp40 = tmp5.compatible && tmp5.dtstart;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        let _Error = Error;
        let error1 = new Error("Invalid empty string");
        throw error1;
      }
      const tmp7 = at(str);
    }
  }
  function Gt(arg0) {
    closure_0 = arg0;
    const self = this;
    return (arg0) => {
      if (undefined !== arg0) {
        const concat = "_".concat;
        self["_".concat(closure_0)] = arg0;
      }
      if (undefined !== self["_".concat("_", closure_0)]) {
        const concat2 = "_".concat;
        return tmp3["_".concat("_", tmp4)];
      } else {
        let num = 0;
        if (0 < tmp3._rrule.length) {
          while (!self._rrule[num].origOptions[closure_0]) {
            num = num + 1;
          }
          return self._rrule[num].origOptions[closure_0];
        }
      }
      tmp4 = closure_0;
    };
  }
  function $t(arg0, arr) {
    if (arg0 instanceof constants) {
      const _String2 = String;
      const mapped = arr.map(String);
      const _String3 = String;
      if (typeof p === "function") {
        if (typeof f === "function") {
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp13 = !tmp12;
              if (null != mapped) {
                tmp13 = 0 === mapped.length;
              }
              let tmp14 = !tmp13;
              if (tmp14) {
                tmp14 = -1 !== mapped.indexOf(tmp7);
              }
              if (!tmp14) {
                arr.push(arg0);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _TypeError = TypeError;
      const _String = String;
      const typeError = new TypeError(String(arg0) + " is not RRule instance");
      throw typeError;
    }
  }
  function Jt(arg0, arr) {
    if (arg0 instanceof Date) {
      const _Number = Number;
      const mapped = arr.map(Number);
      const _Number2 = Number;
      if (typeof p === "function") {
        if (typeof f === "function") {
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp13 = !tmp12;
              if (null != mapped) {
                tmp13 = 0 === mapped.length;
              }
              let tmp14 = !tmp13;
              if (tmp14) {
                tmp14 = -1 !== mapped.indexOf(tmp7);
              }
              if (!tmp14) {
                arr.push(arg0);
                if (typeof R === "function") {
                  const sorted = arr.sort((getTime, getTime2) => {
                    const time = getTime.getTime();
                    return time - getTime2.getTime();
                  });
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _TypeError = TypeError;
      const _String = String;
      const typeError = new TypeError(String(arg0) + " is not Date instance");
      throw typeError;
    }
  }
  let obj = {
    d(arg0, obj) {
      for (const key10005 in arg1) {
        obj2 = closure_0;
        let oResult = closure_0.o(arg1, key10005);
        if (oResult) {
          oResult = !obj2.o(arg0, key10005);
        }
        if (!oResult) {
          continue;
        } else {
          let _Object = Object;
          obj = { enumerable: true, get: arg1[key10005] };
          let definePropertyResult = Object.defineProperty(arg0, key10005, obj);
          continue;
        }
        continue;
      }
    },
    o(arg0, key10009) {
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      return typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009);
    },
    r(arg0) {
      let toStringTag = typeof Symbol !== "undefined";
      if (typeof Symbol !== "undefined") {
        const _Symbol2 = Symbol;
        toStringTag = Symbol.toStringTag;
      }
      if (toStringTag) {
        const _Object = Object;
        const _Symbol = Symbol;
        Object.defineProperty(arg0, Symbol.toStringTag, { value: "Module" });
      }
    },
  };
  closure_0 = obj;
  obj = {};
  obj.r(obj);
  obj = {
    Frequency() {
      return obj3;
    },
    RRule() {
      return constants;
    },
    RRuleSet() {
      return closure_1_76;
    },
    Weekday() {
      return closure_2;
    },
    datetime() {
      return b;
    },
    rrulestr() {
      return Bt;
    },
  };
  obj.d(obj, obj);
  closure_1 = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  class t {
    constructor(arg0, arg1) {
      obj = {};
      if (0 === arg1) {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = new.target;
        str = "Can't create weekday with n == 0";
        tmp4 = new.target;
        error = new Error("Can't create weekday with n == 0");
        tmp6 = error;
        throw error;
      } else {
        tmp = arg0;
        obj.weekday = arg0;
        obj.n = arg1;
        return;
      }
    }
    static fromStr(arg0) {
      index = closure_2_1.indexOf(arg0);
      obj = Object.create(t.prototype);
      return { weekday: index, n: undefined };
    }
    nth(arg0) {
      self = this;
      if (this.n !== arg0) {
        tmp2 = t;
        obj = Object.create(t.prototype);
        obj = {};
        num = 0;
        if (0 === arg0) {
          tmp4 = globalThis;
          _Error = Error;
          tmp5 = new.target;
          str = "Can't create weekday with n == 0";
          tmp6 = new.target;
          error = new Error("Can't create weekday with n == 0");
          tmp8 = error;
          throw error;
        } else {
          obj.weekday = tmp.weekday;
          obj.n = arg0;
          self = obj;
        }
      }
      return self;
    }
    equals(arg0) {
      tmp = this.weekday === arg0.weekday && this.n === arg0.n;
      return tmp;
    }
    toString() {
      self = this;
      tmp = closure_1[this.weekday];
      sum = tmp;
      if (this.n) {
        num = 0;
        str = "";
        if (self.n > 0) {
          str = "+";
        }
        tmp3 = globalThis;
        _String = String;
        sum = str + String(self.n) + tmp;
      }
      return sum;
    }
    getJsWeekday() {
      num = 0;
      if (6 !== this.weekday) {
        num2 = 1;
        num = this.weekday + 1;
      }
      return num;
    }
  }
  closure_0 = t;
  closure_2 = t;
  function i(arg0) {}
  function o(arg0) {}
  function a(arg0) {}
  let fn = function u(arg0, arg1) {
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = arg0;
    }
    let num = arg0;
    if (1 === arguments.length) {
      num = 0;
      tmp = arg0;
    }
    const items = [];
    if (num < tmp) {
      do {
        let arr = items.push(num);
        num = num + 1;
      } while (num < tmp);
    }
    return items;
  };
  function h(arg0, arg1) {}
  function c(arg0, arg1) {}
  function d(arg0, arg1) {}
  function l(arg0) {}
  function f(arg0) {}
  function p(arg0, arg1) {}
  function b(arg0, arg1, arg2, arg3, arg4, arg5) {
    let num = arg3;
    if (undefined === arg3) {
      num = 0;
    }
    let num2 = arg4;
    if (undefined === arg4) {
      num2 = 0;
    }
    let num3 = arg5;
    if (undefined === arg5) {
      num3 = 0;
    }
    return new Date(Date.UTC(arg0, arg1 - 1, arg2, num, num2, num3));
  }
  closure_16 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  c17 = 86400000;
  let date = new Date(Date.UTC(1970, 0, 1, 0, 0, 0));
  dependencyMap = [6, 0, 1, 2, 3, 4, 5];
  function k(arg0) {}
  function E(arg0) {}
  function T(arg0) {}
  function x(arg0) {}
  function O(arg0) {}
  function D(arg0) {}
  function S(arg0) {}
  function U(arg0) {}
  function Y(arg0, arg1) {
    if (typeof b === "function") {
      const _Date = Date;
      const _Date2 = Date;
      const _Date3 = Date;
      date = new Date(Date.UTC(arg0, arg1 + 1 - 1, 1, 0, 0, 0));
      if (typeof U === "function") {
        const items = [dependencyMap[date.getUTCDay(date)]];
        if (typeof S === "function") {
          const uTCMonth = date.getUTCMonth();
          if (1 !== uTCMonth) {
            let num10 = closure_16[uTCMonth];
          } else {
            const uTCFullYear = date.getUTCFullYear();
            if (typeof k === "function") {
              const result = uTCFullYear % 4;
              let tmp14 = result === 0;
              if (result === 0) {
                tmp14 = uTCFullYear % 100 !== 0;
              }
              if (!tmp14) {
                tmp14 = uTCFullYear % 400 === 0;
              }
              num10 = 29;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          items[1] = num10;
          return items;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function L(arg0, arg1) {}
  function M(arg0) {}
  function _(arg0) {}
  function R(arg0) {}
  function N(arg0, arg1) {}
  function A(arg0) {}
  function C(arg0, arg1) {}
  class t {
    constructor(arg0, arg1) {
      obj = { minDate: null, maxDate: null, _result: [], total: 0, method: arg0, args: arg1 };
      if ("between" === arg0) {
        if (arg1.inc) {
          before2 = arg1.before;
        } else {
          tmp7 = globalThis;
          _Date3 = Date;
          before = arg1.before;
          num3 = 1;
          tmp8 = new.target;
          tmp9 = new.target;
          before2 = new Date(before.getTime() - 1);
        }
        obj.maxDate = before2;
        if (arg1.inc) {
          after2 = arg1.after;
        } else {
          tmp10 = globalThis;
          _Date4 = Date;
          after = arg1.after;
          num4 = 1;
          tmp11 = new.target;
          tmp12 = new.target;
          after2 = new Date(after.getTime() + 1);
        }
        obj.minDate = after2;
      } else {
        str2 = "before";
        if ("before" === arg0) {
          if (arg1.inc) {
            dt4 = arg1.dt;
          } else {
            tmp4 = globalThis;
            _Date2 = Date;
            dt3 = arg1.dt;
            num2 = 1;
            tmp5 = new.target;
            tmp6 = new.target;
            dt4 = new Date(dt3.getTime() - 1);
          }
          obj.maxDate = dt4;
        } else {
          str = "after";
          if ("after" === arg0) {
            if (arg1.inc) {
              dt2 = arg1.dt;
            } else {
              tmp = globalThis;
              _Date = Date;
              dt = arg1.dt;
              num = 1;
              tmp2 = new.target;
              tmp3 = new.target;
              dt2 = new Date(dt.getTime() + 1);
            }
            obj.minDate = dt2;
          }
        }
        return;
      }
      return;
    }
    accept(arg0) {
      self = this;
      this.total = this.total + 1;
      tmp = this.minDate && arg0 < self.minDate;
      tmp2 = self.maxDate && arg0 > self.maxDate;
      if ("between" === self.method) {
        if (tmp) {
          flag4 = true;
          return true;
        } else if (tmp2) {
          flag3 = false;
          return false;
        }
      } else {
        str = "before";
        if ("before" === self.method) {
          if (tmp2) {
            flag2 = false;
            return false;
          }
        } else {
          str2 = "after";
          if ("after" === self.method) {
            flag = tmp;
            if (!flag) {
              addResult = self.add(arg0);
              flag = false;
            }
            return flag;
          }
        }
      }
      return self.add(arg0);
    }
    add(arg0) {
      _result = this._result;
      arr = _result.push(arg0);
      return true;
    }
    getValue() {
      ({ _result, method } = this);
      if ("all" !== method) {
        str = "between";
        if ("between" !== method) {
          tmp = null;
          if (_result.length) {
            num = 1;
            tmp = _result[_result.length - 1];
          }
          return tmp;
        }
      }
      return _result;
    }
    clone() {
      ({ method, args } = this);
      obj = Object.create(t.prototype);
      tmp2 = new t(method, args);
      return obj;
    }
  }
  closure_129_0 = t;
  closure_36 = t;
  fn = function j(arg0, arg1) {
    fn = Object.setPrototypeOf;
    if (!fn) {
      const _Array = Array;
      let fn2 = Object.create([]) instanceof Array;
      if (fn2) {
        fn2 = (arg0, arg1) => {
          arg0.__proto__ = arg1;
        };
      }
      fn = fn2;
    }
    if (!fn) {
      fn = (arg0, obj) => {
        for (const key10005 in arg1) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10005);
          } else {
            hasOwnPropertyResult = call(arg1, key10005);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            arg0[key10005] = arg1[key10005];
            continue;
          }
          continue;
        }
      };
    }
    return fn(arg0, arg1);
  };
  closure_38 = function H() {
    let tmp =
      Object.assign ||
      ((arg0) => {
        for (let num = 1; num < length; num = num + 1) {
          let tmp = arguments[num];
          for (const key10012 in tmp) {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10012);
            } else {
              hasOwnPropertyResult = call(tmp, key10012);
            }
            if (!hasOwnPropertyResult) {
              continue;
            } else {
              arg0[key10012] = tmp[key10012];
              continue;
            }
            continue;
          }
        }
        return arg0;
      });
    const self = this;
    closure_38 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_130_0 = t;
  class e {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = t;
      call = t.call;
      if (typeof call === "unknown") {
        tmpResult = tmp(arg0, arg1);
      } else {
        callResult = call(self, arg0, arg1);
      }
      if (!callResult) {
        callResult = self;
      }
      callResult.iterator = arg2;
      return callResult;
    }
    add(arg0) {
      flag = this.iterator(arg0, this._result.length);
      if (flag) {
        _result = this._result;
        arr = _result.push(arg0);
        flag = true;
      }
      return flag;
    }
  }
  closure_131_0 = e;
  class n {
    constructor() {
      this.constructor = t;
      return;
    }
  }
  fn(e, t);
  n.prototype = t.prototype;
  const obj1 = Object.create(n.prototype);
  obj1.constructor = e;
  e.prototype = obj1;
  closure_40 = e;
  let obj2 = {
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    tokens: {
      SKIP: /^[ \r\n\t]+|^\.$/,
      number: /^[1-9][0-9]*/,
      numberAsText: /^(one|two|three)/i,
      every: /^every/i,
      "day(s)": /^days?/i,
      "weekday(s)": /^weekdays?/i,
      "week(s)": /^weeks?/i,
      "hour(s)": /^hours?/i,
      "minute(s)": /^minutes?/i,
      "month(s)": /^months?/i,
      "year(s)": /^years?/i,
      on: /^(on|in)/i,
      at: /^(at)/i,
      the: /^the/i,
      first: /^first/i,
      second: /^second/i,
      third: /^third/i,
      nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
      last: /^last/i,
      for: /^for/i,
      "time(s)": /^times?/i,
      until: /^(un)?til/i,
      monday: /^mo(n(day)?)?/i,
      tuesday: /^tu(e(s(day)?)?)?/i,
      wednesday: /^we(d(n(esday)?)?)?/i,
      thursday: /^th(u(r(sday)?)?)?/i,
      friday: /^fr(i(day)?)?/i,
      saturday: /^sa(t(urday)?)?/i,
      sunday: /^su(n(day)?)?/i,
      january: /^jan(uary)?/i,
      february: /^feb(ruary)?/i,
      march: /^mar(ch)?/i,
      april: /^apr(il)?/i,
      may: /^may/i,
      june: /^june?/i,
      july: /^july?/i,
      august: /^aug(ust)?/i,
      september: /^sep(t(ember)?)?/i,
      october: /^oct(ober)?/i,
      november: /^nov(ember)?/i,
      december: /^dec(ember)?/i,
      comma: /^(,\s*|(and|or)\s*)+/i,
    },
  };
  function z(arg0, arg1) {}
  function K(arg0) {
    return arg0.toString();
  }
  function B(arg0, arg1, arg2) {
    const combined = "".concat(arg1, " ");
    const combined1 = combined.concat(arg2, ", ");
    return combined1.concat(arg0);
  }
  class t {
    constructor(arg0, arg1, arg2, arg3) {
      obj = {};
      tmp = arg1;
      if (undefined === arg1) {
        tmp = K;
      }
      tmp2 = arg2;
      if (undefined === arg2) {
        tmp2 = closure_41;
      }
      tmp3 = arg3;
      if (undefined === arg3) {
        tmp3 = B;
      }
      obj.text = [];
      if (!tmp2) {
        tmp2 = closure_41;
      }
      obj.language = tmp2;
      obj.gettext = tmp;
      obj.dateFormatter = tmp3;
      obj.rrule = arg0;
      ({ options: obj.options, origOptions: obj.origOptions } = arg0);
      if (obj.origOptions.bymonthday) {
        items = [];
        combined = items.concat(obj.options.bymonthday);
        items1 = [];
        combined1 = items1.concat(obj.options.bynmonthday);
        sorted = combined.sort((arg0, arg1) => arg0 - arg1);
        sorted1 = combined1.sort((arg0, arg1) => arg1 - arg0);
        obj.bymonthday = combined.concat(combined1);
        if (!obj.bymonthday.length) {
          tmp6 = null;
          obj.bymonthday = null;
        }
      }
      if (typeof i === "function") {
        tmp8 = null;
        if (null != tmp7) {
          tmp9 = isArray;
          byweekday = obj.origOptions.byweekday;
          if (isArray(obj.origOptions.byweekday)) {
            items2 = byweekday;
          } else {
            items2 = [];
            items2[0] = byweekday;
          }
          tmp10 = globalThis;
          _String = String;
          StringResult = String(items2);
          obj = { allWeeks: null, someWeeks: null, isWeekdays: null, isEveryDay: null };
          obj.allWeeks = items2.filter((item) => !item.n);
          obj.someWeeks = items2.filter((item) => Boolean(item.n));
          str = "MO";
          num = -1;
          tmp11 = -1 !== StringResult.indexOf("MO");
          if (tmp11) {
            str2 = "TU";
            tmp11 = -1 !== StringResult.indexOf("TU");
          }
          if (tmp11) {
            str3 = "WE";
            tmp11 = -1 !== StringResult.indexOf("WE");
          }
          if (tmp11) {
            str4 = "TH";
            tmp11 = -1 !== StringResult.indexOf("TH");
          }
          if (tmp11) {
            str5 = "FR";
            tmp11 = -1 !== StringResult.indexOf("FR");
          }
          if (tmp11) {
            str6 = "SA";
            tmp11 = -1 === StringResult.indexOf("SA");
          }
          if (tmp11) {
            str7 = "SU";
            tmp11 = -1 === StringResult.indexOf("SU");
          }
          obj.isWeekdays = tmp11;
          tmp12 = -1 !== StringResult.indexOf("MO");
          if (tmp12) {
            str8 = "TU";
            tmp12 = -1 !== StringResult.indexOf("TU");
          }
          if (tmp12) {
            str9 = "WE";
            tmp12 = -1 !== StringResult.indexOf("WE");
          }
          if (tmp12) {
            str10 = "TH";
            tmp12 = -1 !== StringResult.indexOf("TH");
          }
          if (tmp12) {
            str11 = "FR";
            tmp12 = -1 !== StringResult.indexOf("FR");
          }
          if (tmp12) {
            str12 = "SA";
            tmp12 = -1 !== StringResult.indexOf("SA");
          }
          if (tmp12) {
            str13 = "SU";
            tmp12 = -1 !== StringResult.indexOf("SU");
          }
          obj.isEveryDay = tmp12;
          obj.byweekday = obj;
          fn = function y(weekday, weekday2) {
            return weekday.weekday - weekday2.weekday;
          };
          allWeeks = obj.byweekday.allWeeks;
          sorted2 = allWeeks.sort(fn);
          someWeeks = obj.byweekday.someWeeks;
          sorted3 = someWeeks.sort(fn);
          if (!obj.byweekday.allWeeks.length) {
            obj.byweekday.allWeeks = null;
          }
          if (!obj.byweekday.someWeeks.length) {
            obj.byweekday.someWeeks = null;
          }
        } else {
          obj.byweekday = null;
        }
        return;
      } else {
        str14 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    static isFullyConvertible(arg0) {
      if (arg0.options.freq in t.IMPLEMENTED) {
        if (arg0.origOptions.until) {
          if (arg0.origOptions.count) {
            flag5 = false;
            return false;
          }
        }
        num = -1;
        for (const key10014 in arg0.origOptions) {
          tmp2 = key10014;
          if (typeof closure_2_42 === "function") {
            items = ["dtstart", "wkst", "freq"];
            if (-1 !== items.indexOf(key10014)) {
              flag3 = true;
              return true;
            } else {
              tmp = t;
              arr2 = t.IMPLEMENTED[arg0.options.freq];
              if (typeof tmp3 === "function") {
                if (-1 !== arr2.indexOf(key10014)) {
                  continue;
                } else {
                  flag2 = false;
                  return false;
                }
              } else {
                str2 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        flag4 = true;
        return true;
      } else {
        flag = false;
        return false;
      }
    }
    isFullyConvertible() {
      return t.isFullyConvertible(this.rrule);
    }
    toString() {
      self = this;
      gettext = this.gettext;
      if (this.options.freq in t.IMPLEMENTED) {
        str2 = "every";
        items = [];
        items[0] = gettext("every");
        self.text = items;
        tmp = closure_2_72;
        tmp2 = self[closure_2_72.FREQUENCIES[self.options.freq]]();
        if (self.options.until) {
          str7 = "until";
          addResult = self.add(gettext("until"));
          until = self.options.until;
          ({ add, dateFormatter } = self);
          uTCFullYear = until.getUTCFullYear();
          addResult1 = add(
            dateFormatter(uTCFullYear, self.language.monthNames[until.getUTCMonth(until)], until.getUTCDate()),
          );
        } else if (self.options.count) {
          str3 = "for";
          addResult2 = self.add(gettext("for"));
          str4 = self.options.count;
          addResult3 = addResult2.add(str4.toString());
          if (self.plural(self.options.count)) {
            str6 = "times";
            gettextResult = gettext("times");
          } else {
            str5 = "time";
            gettextResult = gettext("time");
          }
          addResult4 = addResult3.add(gettextResult);
        }
        if (!self.isFullyConvertible()) {
          str8 = "(~ approximate)";
          addResult5 = self.add(gettext("(~ approximate)"));
        }
        text = self.text;
        str9 = "";
        return text.join("");
      } else {
        str = "RRule error: Unable to fully convert this rrule to text";
        return gettext("RRule error: Unable to fully convert this rrule to text");
      }
    }
    HOURLY() {
      self = this;
      gettext = this.gettext;
      if (1 !== this.options.interval) {
        str = self.options.interval;
        addResult = self.add(str.toString());
      }
      if (self.plural(self.options.interval)) {
        str3 = "hours";
        gettextResult = gettext("hours");
      } else {
        str2 = "hour";
        gettextResult = gettext("hour");
      }
      addResult1 = self.add(gettextResult);
      return;
    }
    MINUTELY() {
      self = this;
      gettext = this.gettext;
      if (1 !== this.options.interval) {
        str = self.options.interval;
        addResult = self.add(str.toString());
      }
      if (self.plural(self.options.interval)) {
        str3 = "minutes";
        gettextResult = gettext("minutes");
      } else {
        str2 = "minute";
        gettextResult = gettext("minute");
      }
      addResult1 = self.add(gettextResult);
      return;
    }
    DAILY() {
      self = this;
      gettext = this.gettext;
      if (1 !== this.options.interval) {
        str = self.options.interval;
        addResult = self.add(str.toString());
      }
      if (self.byweekday) {
        if (self.byweekday.isWeekdays) {
          if (self.plural(self.options.interval)) {
            str5 = "weekdays";
            gettextResult = gettext("weekdays");
          } else {
            str4 = "weekday";
            gettextResult = gettext("weekday");
          }
          addResult1 = self.add(gettextResult);
        }
      }
      if (self.plural(self.options.interval)) {
        str3 = "days";
        gettextResult1 = gettext("days");
      } else {
        str2 = "day";
        gettextResult1 = gettext("day");
      }
      addResult2 = self.add(gettextResult1);
      if (self.origOptions.bymonth) {
        str6 = "in";
        addResult3 = self.add(gettext("in"));
        _bymonthResult = self._bymonth();
      }
      if (self.bymonthday) {
        _bymonthdayResult = self._bymonthday();
      } else if (self.byweekday) {
        _byweekdayResult = self._byweekday();
      } else if (self.origOptions.byhour) {
        _byhourResult = self._byhour();
      }
      return;
    }
    WEEKLY() {
      self = this;
      gettext = this.gettext;
      if (1 === this.options.interval) {
        if (self.byweekday) {
          if (self.byweekday.isWeekdays) {
            if (1 === self.options.interval) {
              if (self.plural(self.options.interval)) {
                str11 = "weekdays";
                gettextResult = gettext("weekdays");
              } else {
                str10 = "weekday";
                gettextResult = gettext("weekday");
              }
              addResult = self.add(gettextResult);
            } else {
              str8 = "on";
              addResult1 = self.add(gettext("on"));
              str9 = "weekdays";
              addResult2 = addResult1.add(gettext("weekdays"));
            }
          }
          return;
        }
        if (self.byweekday) {
          if (self.byweekday.isEveryDay) {
            if (self.plural(self.options.interval)) {
              str7 = "days";
              gettextResult1 = gettext("days");
            } else {
              str6 = "day";
              gettextResult1 = gettext("day");
            }
            addResult3 = self.add(gettextResult1);
          }
        }
        if (1 === self.options.interval) {
          str4 = "week";
          addResult4 = self.add(gettext("week"));
        }
        if (self.origOptions.bymonth) {
          str5 = "in";
          addResult5 = self.add(gettext("in"));
          _bymonthResult = self._bymonth();
        }
        if (self.bymonthday) {
          _bymonthdayResult = self._bymonthday();
        } else if (self.byweekday) {
          _byweekdayResult = self._byweekday();
        }
      } else {
        str = self.options.interval;
        addResult6 = self.add(str.toString());
        if (self.plural(self.options.interval)) {
          str3 = "weeks";
          gettextResult2 = gettext("weeks");
        } else {
          str2 = "week";
          gettextResult2 = gettext("week");
        }
        addResult7 = addResult6.add(gettextResult2);
      }
      return;
    }
    MONTHLY() {
      self = this;
      gettext = this.gettext;
      interval = this.options.interval;
      if (this.origOptions.bymonth) {
        if (1 !== interval) {
          str4 = self.options.interval;
          addResult = self.add(str4.toString());
          str5 = "months";
          addResult1 = addResult.add(gettext("months"));
          if (self.plural(self.options.interval)) {
            str6 = "in";
            addResult2 = self.add(gettext("in"));
          }
        }
        _bymonthResult = self._bymonth();
      } else {
        if (1 !== interval) {
          str = self.options.interval;
          addResult3 = self.add(str.toString());
        }
        if (self.plural(self.options.interval)) {
          str3 = "months";
          gettextResult = gettext("months");
        } else {
          str2 = "month";
          gettextResult = gettext("month");
        }
        addResult4 = self.add(gettextResult);
      }
      if (self.bymonthday) {
        _bymonthdayResult = self._bymonthday();
      } else {
        if (self.byweekday) {
          if (self.byweekday.isWeekdays) {
            str7 = "on";
            addResult5 = self.add(gettext("on"));
            str8 = "weekdays";
            addResult6 = addResult5.add(gettext("weekdays"));
          }
        }
        if (self.byweekday) {
          _byweekdayResult = self._byweekday();
        }
      }
      return;
    }
    YEARLY() {
      self = this;
      gettext = this.gettext;
      interval = this.options.interval;
      if (this.origOptions.bymonth) {
        if (1 !== interval) {
          str4 = self.options.interval;
          addResult = self.add(str4.toString());
          str5 = "years";
          addResult1 = self.add(gettext("years"));
        }
        _bymonthResult = self._bymonth();
      } else {
        if (1 !== interval) {
          str = self.options.interval;
          addResult2 = self.add(str.toString());
        }
        if (self.plural(self.options.interval)) {
          str3 = "years";
          gettextResult = gettext("years");
        } else {
          str2 = "year";
          gettextResult = gettext("year");
        }
        addResult3 = self.add(gettextResult);
      }
      if (self.bymonthday) {
        _bymonthdayResult = self._bymonthday();
      } else if (self.byweekday) {
        _byweekdayResult = self._byweekday();
      }
      if (self.options.byyearday) {
        str6 = "on the";
        addResult4 = self.add(gettext("on the"));
        str7 = "and";
        addResult5 = addResult4.add(self.list(self.options.byyearday, self.nth, gettext("and")));
        str8 = "day";
        addResult6 = addResult5.add(gettext("day"));
      }
      if (!self.options.byweekno) {
        return;
      } else {
        str9 = "in";
        addResult7 = self.add(gettext("in"));
        add = addResult7.add;
        if (self.plural(self.options.byweekno.length)) {
          str11 = "weeks";
          gettextResult1 = gettext("weeks");
        } else {
          str10 = "week";
          gettextResult1 = gettext("week");
        }
        addResult7 = add(gettextResult1);
        add = addResult7.add;
        str12 = "and";
        addResult8 = add(self.list(self.options.byweekno, undefined, gettext("and")));
      }
      return;
    }
    _bymonthday() {
      self = this;
      gettext = this.gettext;
      if (this.byweekday) {
        if (self.byweekday.allWeeks) {
          str = "on";
          addResult = self.add(gettext("on"));
          str2 = "or";
          addResult1 = addResult.add(self.list(self.byweekday.allWeeks, self.weekdaytext, gettext("or")));
          str3 = "the";
          addResult2 = addResult1.add(gettext("the"));
          ({ list: list2, bymonthday: bymonthday2, nth: nth2 } = self);
          addResult3 = addResult2.add(list2(bymonthday2, nth2, gettext("or")));
        }
        return;
      }
      addResult4 = self.add(gettext("on the"));
      ({ list, bymonthday, nth } = self);
      addResult5 = addResult4.add(list(bymonthday, nth, gettext("and")));
      return;
    }
    _byweekday() {
      self = this;
      gettext = this.gettext;
      tmp = this.byweekday.allWeeks && !self.byweekday.isWeekdays;
      if (tmp) {
        str = "on";
        addResult = self.add(gettext("on"));
        addResult1 = addResult.add(self.list(self.byweekday.allWeeks, self.weekdaytext));
      }
      if (self.byweekday.someWeeks) {
        if (self.byweekday.allWeeks) {
          str2 = "and";
          addResult2 = self.add(gettext("and"));
        }
        str3 = "on the";
        addResult3 = self.add(gettext("on the"));
        str4 = "and";
        addResult4 = addResult3.add(self.list(self.byweekday.someWeeks, self.weekdaytext, gettext("and")));
      }
      return;
    }
    _byhour() {
      gettext = this.gettext;
      addResult = this.add(gettext("at"));
      addResult1 = addResult.add(this.list(this.origOptions.byhour, undefined, gettext("and")));
      return;
    }
    _bymonth() {
      ({ add, list } = this);
      addResult = add(list(this.options.bymonth, this.monthtext, this.gettext("and")));
      return;
    }
    nth(arg0) {
      parsed = parseInt(arg0.toString(), 10);
      gettext = this.gettext;
      if (-1 === parsed) {
        str7 = "last";
        return gettext("last");
      } else {
        _Math = Math;
        absolute = Math.abs(parsed);
        num8 = 1;
        if (1 !== absolute) {
          num = 21;
          if (21 !== absolute) {
            num2 = 31;
            if (31 !== absolute) {
              num3 = 2;
              if (2 !== absolute) {
                num4 = 22;
                if (22 !== absolute) {
                  num5 = 3;
                  if (3 !== absolute) {
                    num6 = 23;
                    if (23 !== absolute) {
                      str = "th";
                      sum = absolute + gettext("th");
                    }
                  }
                  str2 = "rd";
                  sum = absolute + gettext("rd");
                }
              }
              str3 = "nd";
              sum = absolute + gettext("nd");
            }
            num7 = 0;
            text = sum;
            if (parsed < 0) {
              str5 = "last";
              str6 = " ";
              text = `${tmp2} ${gettext("last")}`;
            }
            return text;
          }
        }
        str4 = "st";
        sum = absolute + gettext("st");
      }
      return;
    }
    monthtext(arg0) {
      return this.language.monthNames[arg0 - 1];
    }
    weekdaytext(arg0) {
      if (typeof o === "function") {
        tmp = arg0;
        if (typeof arg0 === "number") {
          num = 1;
          num2 = 7;
          result = (arg0 + 1) % 7;
        } else {
          result = arg0.getJsWeekday();
        }
        self = this;
        str = "";
        if (arg0.n) {
          str2 = " ";
          str = `${self.nth(arg0.n)} `;
        }
        return str + self.language.dayNames[result];
      } else {
        str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    plural(arg0) {
      return arg0 % 100 !== 1;
    }
    add(arg0) {
      text = this.text;
      arr = text.push(" ");
      text1 = this.text;
      arr1 = text1.push(arg0);
      return this;
    }
    list(arg0, arg1, arg2, arg3) {
      fn = arg1;
      f125024 = arg1;
      str = arg3;
      self = this;
      if (undefined === arg3) {
        str = ",";
      }
      arr = arg0;
      if (!isArray(arg0)) {
        items = [];
        items[0] = arg0;
        arr = items;
      }
      if (!fn) {
        fn = (arg0) => arg0.toString();
      }
      f125024 = fn;
      mapped = arr.map(function o(item) {
        if (!fn) {
          return tmp;
        } else {
          const call = tmp.call;
          typeof call === "unknown" ? tmp(item) : call(self, item);
        }
      });
      if (arg2) {
        num = 0;
        str3 = "";
        num2 = 1;
        str4 = " ";
        tmp2 = globalThis;
        num3 = 0;
        str5 = "";
        if (0 < mapped.length) {
          tmp3 = num3;
          tmp5 = str3;
          while (0 === num3) {
            str3 = tmp4 + mapped[num3];
            num3 = num3 + 1;
            str5 = str3;
          }
          if (num3 === mapped.length - 1) {
            _HermesInternal = HermesInternal;
            combined = str3 + ` ${arg2}` + " ";
          } else {
            combined = `${str3}${str} `;
          }
          tmp7 = combined;
        }
        joined = str5;
      } else {
        str2 = " ";
        joined = mapped.join(`${str} `);
      }
      return joined;
    }
  }
  closure_0 = t;
  closure_45 = t;
  class t {
    constructor(arg0) {
      return;
    }
    start(arg0) {
      obj = { text: arg0, done: false };
      return obj.nextSymbol();
    }
    isDone() {
      done = this.done;
      if (done) {
        tmp = null;
        done = null === this.symbol;
      }
      return done;
    }
    nextSymbol() {
      obj = { symbol: null, value: null };
      while (!obj.done) {
        tmp3 = tmp2;
        tmp4 = null;
        tmp5 = tmp2;
        tmp6 = null;
        keys = Object.keys();
        if (keys !== undefined) {
          tmp8 = tmp3;
          tmp9 = tmp4;
          tmp5 = tmp3;
          tmp6 = tmp4;
          tmp10 = keys[tmp];
          while (tmp10 !== undefined) {
            tmp13 = tmp10;
            obj2 = obj.rules[tmp10];
            match = obj2.exec(obj.text);
            tmp12 = match;
            if (match) {
              tmp11 = null === tmp4 || match[0].length > tmp4[0].length;
              tmp12 = tmp11;
            }
            if (!tmp12) {
              continue;
            } else {
              tmp3 = tmp10;
              tmp4 = match;
              continue;
            }
            continue;
          }
        }
        if (null != tmp6) {
          str = obj.text;
          obj.text = str.substr(tmp6[0].length);
          if ("" === obj.text) {
            obj.done = true;
          }
        }
        if (null == tmp6) {
          obj.done = true;
          obj.symbol = null;
          obj.value = null;
          return;
        } else {
          tmp2 = tmp5;
          if ("SKIP" === tmp5) {
            continue;
          } else {
            obj.symbol = tmp5;
            obj.value = tmp6;
            return true;
          }
        }
      }
      return false;
    }
    accept(arg0) {
      self = this;
      if (this.symbol === arg0) {
        if (self.value) {
          nextSymbolResult = self.nextSymbol();
          return self.value;
        } else {
          nextSymbolResult1 = self.nextSymbol();
          flag2 = true;
          return true;
        }
      } else {
        flag = false;
        return false;
      }
    }
    acceptNumber() {
      return this.accept("number");
    }
    expect(arg0) {
      if (this.accept(arg0)) {
        flag = true;
        return true;
      } else {
        tmp = globalThis;
        _Error = Error;
        str = "expected ";
        str2 = " but found ";
        tmp2 = new.target;
        tmp3 = new.target;
        error = new Error("expected " + arg0 + " but found " + this.symbol);
        tmp5 = error;
        throw error;
      }
    }
  }
  closure_46 = t;
  let obj3 = { YEARLY: 0 };
  obj3[0] = "YEARLY";
  obj3.MONTHLY = 1;
  obj3[1] = "MONTHLY";
  obj3.WEEKLY = 2;
  obj3[2] = "WEEKLY";
  obj3.DAILY = 3;
  obj3[3] = "DAILY";
  obj3.HOURLY = 4;
  obj3[4] = "HOURLY";
  obj3.MINUTELY = 5;
  obj3[5] = "MINUTELY";
  obj3.SECONDLY = 6;
  obj3[6] = "SECONDLY";
  let items = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
  t.IMPLEMENTED = [];
  t.IMPLEMENTED[obj3.HOURLY] = items;
  t.IMPLEMENTED[obj3.MINUTELY] = items;
  let items1 = ["byhour"];
  t.IMPLEMENTED[obj3.DAILY] = items1.concat(items);
  t.IMPLEMENTED[obj3.WEEKLY] = items;
  t.IMPLEMENTED[obj3.MONTHLY] = items;
  let items2 = ["byweekno", "byyearday"];
  t.IMPLEMENTED[obj3.YEARLY] = items2.concat(items);
  const isFullyConvertible = t.isFullyConvertible;
  class t {
    constructor(arg0, arg1, arg2, arg3) {
      obj = { hour: arg0, minute: arg1, second: arg2 };
      num = arg3;
      if (!arg3) {
        num = 0;
      }
      obj.millisecond = num;
      return;
    }
    getHours() {
      return this.hour;
    }
    getMinutes() {
      return this.minute;
    }
    getSeconds() {
      return this.second;
    }
    getMilliseconds() {
      return this.millisecond;
    }
    getTime() {
      return 1000 * (60 * this.hour * 60 + 60 * this.minute + this.second) + this.millisecond;
    }
  }
  closure_49 = t;
  closure_0 = t;
  class e {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      obj = this;
      num = arg6;
      tmp = t;
      call = t.call;
      if (typeof call === "unknown") {
        obj = {};
        obj.hour = arg3;
        obj.minute = arg4;
        obj.second = arg5;
        if (!num) {
          num = 0;
        }
        obj.millisecond = num;
      } else {
        tmp3 = tmp;
        tmp4 = obj;
        tmp5 = arg3;
        tmp6 = arg4;
        tmp7 = arg5;
        tmp8 = num;
        callResult = call(obj, arg3, arg4, arg5, num);
      }
      if (!callResult) {
        callResult = obj;
      }
      callResult.year = arg0;
      callResult.month = arg1;
      callResult.day = arg2;
      return callResult;
    }
    static fromDate(arg0) {
      uTCFullYear = arg0.getUTCFullYear();
      sum = arg0.getUTCMonth() + 1;
      uTCDate = arg0.getUTCDate();
      uTCHours = arg0.getUTCHours();
      uTCMinutes = arg0.getUTCMinutes();
      uTCSeconds = arg0.getUTCSeconds();
      tmp7 = new this(uTCFullYear, sum, uTCDate, uTCHours, uTCMinutes, uTCSeconds, arg0.valueOf() % 1000);
      return tmp7;
    }
    getWeekday() {
      date = new Date(this.getTime());
      if (typeof U === "function") {
        tmp = date;
        tmp2 = closure_19;
        return closure_19[date.getUTCDay(date)];
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    getTime() {
      date = new Date(
        Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond),
      );
      return date.getTime();
    }
    getDay() {
      return this.day;
    }
    getMonth() {
      return this.month;
    }
    getYear() {
      return this.year;
    }
    addYears(arg0) {
      this.year = this.year + arg0;
      return;
    }
    addMonths(arg0) {
      self = this;
      this.month = this.month + arg0;
      if (this.month > 12) {
        tmp3 = globalThis;
        _Math = Math;
        tmp5 = c;
        if (typeof c === "function") {
          result = self.month % 12;
          num = 0;
          sum = result;
          if (result * 12 < 0) {
            sum = result + 12;
          }
          self.month = sum;
          self.year = self.year + tmp4;
          if (0 === self.month) {
            self.month = 12;
            self.year = self.year - 1;
          }
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      return;
    }
    addWeekly(arg0, arg1) {
      self = this;
      if (arg1 > this.getWeekday()) {
        num2 = 1;
        num3 = 6;
        num4 = 7;
        self.day = self.day + (-self.getWeekday() + 1 + (6 - arg1) + 7 * arg0);
      } else {
        num = 7;
        self.day = self.day + (-self.getWeekday() - arg1 + 7 * arg0);
      }
      fixDayResult = self.fixDay();
      return;
    }
    addDaily(arg0) {
      this.day = this.day + arg0;
      fixDayResult = this.fixDay();
      return;
    }
    addHours(arg0, arg1, arg2) {
      self = this;
      if (arg1) {
        _Math = Math;
        num = 23;
        self.hour = self.hour + Math.floor((23 - self.hour) / arg0) * arg0;
      }
      self.hour = self.hour + arg0;
      hour = self.hour;
      while (typeof d === "function") {
        _Math2 = Math;
        rounded = Math.floor(hour / 24);
        tmp2 = c;
        if (typeof c === "function") {
          result = hour % 24;
          sum = result;
          if (result * 24 < 0) {
            sum = result + 24;
          }
          if (rounded) {
            self.hour = sum;
            addDailyResult = self.addDaily(rounded);
          }
          if (typeof l === "function") {
            if (typeof i === "function") {
              tmp8 = null != arg2;
              tmp9 = !tmp8;
              if (tmp8) {
                tmp9 = 0 === arg2.length;
              }
              if (!tmp9) {
                tmp10 = p;
                if (typeof p === "function") {
                  tmp12 = f;
                  if (typeof f === "function") {
                    if (typeof tmp6 === "function") {
                      if (typeof tmp7 === "function") {
                        tmp13 = null != arg2;
                        tmp14 = !tmp13;
                        if (tmp13) {
                          tmp14 = 0 === arg2.length;
                        }
                        tmp15 = !tmp14 && -1 !== arg2.indexOf(tmp11);
                      } else {
                        str7 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      str6 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    str5 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  str4 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              return;
            } else {
              str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    addMinutes(arg0, arg1, arg2, arg3) {
      self = this;
      if (arg1) {
        _Math = Math;
        num = 1439;
        self.minute = self.minute + Math.floor((1439 - (60 * self.hour + self.minute)) / arg0) * arg0;
      }
      self.minute = self.minute + arg0;
      minute = self.minute;
      while (typeof d === "function") {
        _Math2 = Math;
        rounded = Math.floor(minute / 60);
        tmp2 = c;
        if (typeof c === "function") {
          result = minute % 60;
          sum = result;
          if (result * 60 < 0) {
            sum = result + 60;
          }
          if (rounded) {
            self.minute = sum;
            addHoursResult = self.addHours(rounded, false, arg2);
          }
          tmp6 = l;
          if (typeof l === "function") {
            tmp7 = i;
            if (typeof i === "function") {
              tmp8 = null != arg2;
              tmp9 = !tmp8;
              if (tmp8) {
                tmp9 = 0 === arg2.length;
              }
              if (tmp9) {
                if (typeof tmp6 === "function") {
                  if (typeof tmp7 === "function") {
                    tmp16 = null != arg3;
                    tmp17 = !tmp16;
                    if (tmp16) {
                      tmp17 = 0 === arg3.length;
                    }
                    if (!tmp17) {
                      tmp18 = p;
                      if (typeof p === "function") {
                        tmp20 = f;
                        if (typeof f === "function") {
                          if (typeof tmp6 === "function") {
                            if (typeof tmp7 === "function") {
                              tmp21 = null != arg3;
                              tmp22 = !tmp21;
                              if (tmp21) {
                                tmp22 = 0 === arg3.length;
                              }
                              tmp23 = !tmp22 && -1 !== arg3.indexOf(tmp19);
                            } else {
                              str13 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            str12 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          str11 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        str10 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    return;
                  } else {
                    str9 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  str8 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                tmp10 = p;
                if (typeof p === "function") {
                  tmp12 = f;
                  if (typeof f === "function") {
                    if (typeof tmp6 === "function") {
                      if (typeof tmp7 === "function") {
                        tmp13 = null != arg2;
                        tmp14 = !tmp13;
                        if (tmp13) {
                          tmp14 = 0 === arg2.length;
                        }
                        tmp15 = !tmp14 && -1 !== arg2.indexOf(tmp11);
                      } else {
                        str7 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      str6 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    str5 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  str4 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              continue;
            } else {
              str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    addSeconds(arg0, arg1, arg2, arg3, arg4) {
      self = this;
      if (arg1) {
        _Math = Math;
        num = 3600;
        num2 = 86399;
        self.second =
          self.second + Math.floor((86399 - (3600 * self.hour + 60 * self.minute + self.second)) / arg0) * arg0;
      }
      self.second = self.second + arg0;
      second = self.second;
      while (typeof d === "function") {
        _Math2 = Math;
        rounded = Math.floor(second / 60);
        tmp2 = c;
        if (typeof c === "function") {
          result = second % 60;
          sum = result;
          if (result * 60 < 0) {
            sum = result + 60;
          }
          if (rounded) {
            self.second = sum;
            tmp5 = self;
            tmp6 = rounded;
            flag = false;
            tmp7 = arg2;
            tmp8 = arg3;
            addMinutesResult = self.addMinutes(rounded, false, arg2, arg3);
          }
          tmp10 = l;
          if (typeof l === "function") {
            tmp11 = i;
            if (typeof i === "function") {
              tmp12 = null != arg2;
              tmp13 = !tmp12;
              if (tmp12) {
                tmp13 = 0 === arg2.length;
              }
              if (tmp13) {
                if (typeof tmp10 === "function") {
                  if (typeof tmp11 === "function") {
                    tmp20 = null != arg3;
                    tmp21 = !tmp20;
                    if (tmp20) {
                      tmp21 = 0 === arg3.length;
                    }
                    if (tmp21) {
                      if (typeof tmp10 === "function") {
                        if (typeof tmp11 === "function") {
                          tmp28 = null != arg4;
                          tmp29 = !tmp28;
                          if (tmp28) {
                            tmp29 = 0 === arg4.length;
                          }
                          if (!tmp29) {
                            tmp30 = p;
                            if (typeof p === "function") {
                              tmp32 = f;
                              if (typeof f === "function") {
                                if (typeof tmp10 === "function") {
                                  if (typeof tmp11 === "function") {
                                    tmp33 = null != arg4;
                                    tmp34 = !tmp33;
                                    if (tmp33) {
                                      tmp34 = 0 === arg4.length;
                                    }
                                    tmp35 = !tmp34 && -1 !== arg4.indexOf(tmp31);
                                  } else {
                                    str19 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  str18 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                str17 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              str16 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          return;
                        } else {
                          str15 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        str14 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      tmp22 = p;
                      if (typeof p === "function") {
                        tmp24 = f;
                        if (typeof f === "function") {
                          if (typeof tmp10 === "function") {
                            if (typeof tmp11 === "function") {
                              tmp25 = null != arg3;
                              tmp26 = !tmp25;
                              if (tmp25) {
                                tmp26 = 0 === arg3.length;
                              }
                              tmp27 = !tmp26 && -1 !== arg3.indexOf(tmp23);
                            } else {
                              str13 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            str12 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          str11 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        str10 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    continue;
                  } else {
                    str9 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  str8 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                tmp14 = p;
                if (typeof p === "function") {
                  tmp16 = f;
                  if (typeof f === "function") {
                    if (typeof tmp10 === "function") {
                      if (typeof tmp11 === "function") {
                        tmp17 = null != arg2;
                        tmp18 = !tmp17;
                        if (tmp17) {
                          tmp18 = 0 === arg2.length;
                        }
                        tmp19 = !tmp18 && -1 !== arg2.indexOf(tmp15);
                      } else {
                        str7 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      str6 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    str5 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  str4 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              continue;
            } else {
              str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    fixDay() {
      self = this;
      if (this.day > 28) {
        tmp3 = Y;
        num = 1;
        num2 = 0;
        tmp2 = Y(self.year, self.month - 1)[1];
        if (self.day > tmp2) {
          num3 = 9999;
          num4 = 13;
          if (self.day > tmp2) {
            while (true) {
              self.day = self.day - tmp2;
              self.month = self.month + 1;
              if (13 === self.month) {
                self.month = 1;
                self.year = self.year + 1;
                if (self.year > 9999) {
                  break;
                }
              }
              tmp = Y;
              tmp2 = Y(self.year, self.month - 1)[1];
            }
            return;
          }
        }
      }
      return;
    }
    add(arg0, arg1) {
      self = this;
      ({ freq, interval, byhour, byminute, bysecond } = arg0);
      tmp2 = closure_39;
      if (closure_39.YEARLY === freq) {
        return self.addYears(interval);
      } else if (tmp2.MONTHLY === freq) {
        return self.addMonths(interval);
      } else if (tmp2.WEEKLY === freq) {
        return self.addWeekly(interval, tmp);
      } else if (tmp2.DAILY === freq) {
        return self.addDaily(interval);
      } else {
        tmp3 = arg1;
        if (tmp2.HOURLY === freq) {
          return self.addHours(interval, arg1, byhour);
        } else if (tmp2.MINUTELY === freq) {
          tmp10 = self;
          tmp11 = interval;
          tmp12 = arg1;
          tmp13 = byhour;
          tmp14 = byminute;
          return self.addMinutes(interval, arg1, byhour, byminute);
        } else if (tmp2.SECONDLY === freq) {
          tmp4 = self;
          tmp5 = interval;
          tmp6 = arg1;
          tmp7 = byhour;
          tmp8 = byminute;
          tmp9 = bysecond;
          return self.addSeconds(interval, arg1, byhour, byminute, bysecond);
        } else {
          return;
        }
      }
    }
  }
  closure_132_0 = e;
  class n {
    constructor() {
      this.constructor = t;
      return;
    }
  }
  fn(e, t);
  n.prototype = t.prototype;
  const obj4 = Object.create(n.prototype);
  obj4.constructor = e;
  e.prototype = obj4;
  closure_50 = e;
  class t {
    constructor(arg0, arg1) {
      obj = {};
      if (isNaN(arg0.getTime())) {
        _RangeError = RangeError;
        tmp2 = new.target;
        str = "Invalid date passed to DateWithZone";
        tmp3 = new.target;
        rangeError = new RangeError("Invalid date passed to DateWithZone");
        tmp5 = rangeError;
        throw rangeError;
      } else {
        tmp = arg1;
        obj.date = arg0;
        obj.tzid = arg1;
        return;
      }
    }
    toString() {
      self = this;
      date = this.date;
      time = date.getTime();
      flag = this.isUTC;
      if (typeof N === "function") {
        if (undefined === flag) {
          flag = true;
        }
        tmp2 = globalThis;
        _Date = Date;
        tmp3 = new.target;
        tmp4 = new.target;
        tmp5 = time;
        date = new Date(time);
        tmp6 = date;
        tmp7 = y;
        str = date.getUTCFullYear();
        str2 = "0";
        num = 4;
        num2 = 0;
        items = [, , , , , , ,];
        items[0] = y(str.toString(), 4, "0");
        num3 = 1;
        num4 = 2;
        items[1] = y(date.getUTCMonth() + 1, 2, "0");
        items[2] = y(date.getUTCDate(), 2, "0");
        str3 = "T";
        items[3] = "T";
        items[4] = y(date.getUTCHours(), 2, "0");
        items[5] = y(date.getUTCMinutes(), 2, "0");
        items[6] = y(date.getUTCSeconds(), 2, "0");
        str4 = "";
        str5 = "";
        if (flag) {
          str5 = "Z";
        }
        items[7] = str5;
        joined = items.join("");
        str6 = ":";
        if (self.isUTC) {
          concat2 = ":".concat;
          combined = ":".concat(joined);
        } else {
          str7 = ";TZID=";
          concat = ";TZID=".concat;
          combined1 = ";TZID=".concat(self.tzid, ":");
          combined = combined1.concat(joined);
        }
        return combined;
      } else {
        str8 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    getTime() {
      date = this.date;
      return date.getTime();
    }
    rezonedDate() {
      date = this.date;
      if (this.isUTC) {
        date1 = date;
      } else {
        tzid = tmp.tzid;
        tmp2 = globalThis;
        _Intl = Intl;
        DateTimeFormatResult = Intl.DateTimeFormat();
        if (typeof C === "function") {
          obj = { timeZone: null };
          obj.timeZone = tmp4;
          str = "sv-SE";
          str2 = date.toLocaleString("sv-SE", obj);
          str3 = "T";
          str4 = " ";
          str5 = "Z";
          tmp7 = new.target;
          tmp8 = new.target;
          tmp5 = new tmp5(str2.replace(" ", "T") + "Z");
          tmp9 = null;
          str6 = "UTC";
          if (null != tzid) {
            str6 = tzid;
          }
          if (typeof tmp6 === "function") {
            tmp10 = tmp5;
            obj = { timeZone: null };
            obj.timeZone = str6;
            str7 = date.toLocaleString("sv-SE", obj);
            tmp11 = new.target;
            tmp12 = new.target;
            date = new Date(str7.replace(" ", "T") + "Z");
            tmp13 = date;
            time = date.getTime();
            _Date = Date;
            diff = time - tmp5.getTime();
            tmp16 = new.target;
            tmp17 = new.target;
            date1 = new Date(date.getTime() - diff);
          } else {
            str9 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str8 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      return date1;
    }
  }
  Object.defineProperty(t.prototype, "isUTC", {
    get() {
      const tzid = this.tzid;
      let tmp = !tzid;
      if (tzid) {
        tmp = "UTC" === this.tzid.toUpperCase();
      }
      return tmp;
    },
    enumerable: false,
    configurable: true,
  });
  closure_55 = t;
  class t {
    constructor() {
      return;
    }
    _cacheAdd(arg0, arg1, arg2) {
      arr = arg1;
      if (!arg1) {
        self = this;
        tmp16 = arg0;
        str = "all";
        if ("all" === arg0) {
          self.all = arr;
        } else {
          tmp17 = arg2;
          arg2._value = arr;
          arr3 = self[arg0];
          arr = arr3.push(arg2);
        }
        return;
      } else {
        date = globalThis;
        _Date = Date;
        if (arr instanceof Date) {
          tmp12 = M;
          if (typeof M === "function") {
            time = arr.getTime();
            arr = new.target;
            tmp14 = new.target;
            date = new date.Date(time);
            tmp3 = date;
          } else {
            str4 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp2 = _;
          if (typeof _ === "function") {
            items = [];
            num = 0;
            num2 = 1;
            tmp3 = items;
            if (0 < arr.length) {
              tmp5 = M;
              obj = arr[num];
              tmp6 = num;
              while (typeof M === "function") {
                _Date2 = Date;
                tmp7 = new.target;
                tmp8 = new.target;
                date1 = new Date(obj.getTime());
                tmp10 = date1;
                tmp4Result = tmp4(date1);
                num = num + 1;
                tmp3 = items;
              }
              str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        tmp15 = tmp3;
      }
      return;
    }
    _cacheGet(arg0, arg1) {
      if (arg1) {
        tmp = globalThis;
        _Object = Object;
        keys = Object.keys(arg1);
      } else {
        keys = [];
      }
      self = this;
      arr2 = this[arg0];
      if ("all" === arg0) {
        flag = self.all;
      } else {
        tmp36 = isArray;
        flag = false;
        if (isArray(arr2)) {
          num = 0;
          num2 = 1;
          tmp2 = globalThis;
          num3 = 0;
          flag = false;
          if (0 < arr2.length) {
            tmp3 = arr2[num3];
            tmp4 = num3;
            while (keys.length) {
              num4 = 0;
              flag2 = false;
              if (0 < keys.length) {
                while (true) {
                  tmp5 = keys[num4];
                  arr3 = arg1[tmp5];
                  arr4 = tmp3[tmp5];
                  closure_0 = arr4;
                  _Array = Array;
                  tmp6 = num4;
                  if (Array.isArray(arr3)) {
                    _Array2 = Array;
                    tmp10 =
                      Array.isArray(arr4) &&
                      arr3.length === arr4.length &&
                      arr3.every((getTime, index) => {
                        const time = getTime.getTime();
                        return time === arr4[index].getTime();
                      });
                    tmp7 = tmp10;
                  } else {
                    _Date = Date;
                    if (arr3 instanceof Date) {
                      _Date2 = Date;
                      tmp8 = arr4 instanceof Date;
                      if (tmp8) {
                        time = arr3.getTime();
                        tmp8 = time === arr4.getTime();
                      }
                      tmp7 = tmp8;
                    } else {
                      tmp7 = arr3 === arr4;
                    }
                  }
                  flag2 = true;
                  if (!tmp7) {
                    break;
                  } else {
                    sum = num4 + 1;
                    num4 = sum;
                    flag2 = false;
                    if (sum >= keys.length) {
                      break;
                    }
                  }
                }
              }
              if (!flag2) {
                break;
              } else {
                sum1 = num3 + 1;
                num3 = sum1;
                flag = false;
              }
            }
            flag = tmp3._value;
          }
        }
      }
      arr5 = flag;
      if (!flag) {
        arr5 = flag;
        if (self.all) {
          tmp13 = t;
          obj = new.target;
          tmp14 = new.target;
          tmp15 = arg0;
          tmp16 = arg1;
          tmp17 = new t(arg0, arg1);
          num5 = 0;
          if (0 < self.all.length) {
            num6 = 1;
            num7 = 0;
            if (obj.accept(self.all[0])) {
              sum2 = num7 + 1;
              while (sum2 < self.all.length) {
                num7 = sum2;
                if (!obj.accept(self.all[sum2])) {
                  break;
                }
              }
            }
          }
          value = obj.getValue();
          _cacheAddResult = self._cacheAdd(arg0, value, arg1);
          arr5 = value;
        }
      }
      if (isArray(arr5)) {
        tmp26 = _;
        if (typeof _ === "function") {
          items = [];
          num8 = 0;
          tmp27 = globalThis;
          num9 = 1;
          date1 = items;
          if (0 < arr5.length) {
            tmp29 = M;
            obj2 = arr5[num8];
            tmp30 = num8;
            while (typeof M === "function") {
              _Date5 = Date;
              tmp31 = new.target;
              tmp32 = new.target;
              date = new Date(obj2.getTime());
              tmp34 = date;
              tmp28Result = tmp28(date);
              num8 = num8 + 1;
              date1 = items;
            }
            str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        tmp21 = globalThis;
        _Date3 = Date;
        date1 = arr5;
        if (arr5 instanceof Date) {
          tmp23 = M;
          if (typeof M === "function") {
            _Date4 = Date;
            tmp24 = new.target;
            tmp25 = new.target;
            date1 = new Date(arr5.getTime());
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      return date1;
    }
  }
  closure_57 = t;
  let items3 = [];
  let num = 31;
  let num2 = 0;
  let num3 = 0;
  if (isArray(1)) {
    do {
      let items4 = [];
      items3[num3] = items4.concat(1);
      num3 = num3 + 1;
    } while (num3 < num);
  } else {
    do {
      items3[num2] = 1;
      num2 = num2 + 1;
    } while (num2 < num);
  }
  let fn2 = function q(fn2Result23, fnResult3, arg2) {
    let tmp;
    if (arg2) {
      let num4 = 0;
      if (0 < fnResult3.length) {
        while (true) {
          let tmp4 = !tmp3;
          let tmp6 = tmp3;
          if (!tmp3) {
            tmp4 = num4 in fnResult3;
          }
          let tmp7 = tmp3;
          if (!tmp4) {
            if (!tmp3) {
              break;
            } else {
              tmp6[num4] = fnResult3[num4];
              tmp7 = tmp6;
            }
          }
          num4 = num4 + 1;
          tmp3 = tmp7;
          tmp = tmp7;
        }
        const _Array = Array;
        const call = slice.call;
        typeof call === "unknown" ? slice(0, num4) : call(fnResult3, 0, num4);
      }
    }
    if (tmp) {
      return fn2Result23.concat(tmp);
    } else {
      const _Array2 = Array;
      const call2 = slice2.call;
      typeof call2 === "unknown" ? slice2() : call2(fnResult3);
    }
  };
  let items5 = [];
  let num4 = 0;
  let num5 = 0;
  if (isArray(2)) {
    do {
      let items6 = [];
      items5[num5] = items6.concat(2);
      num5 = num5 + 1;
    } while (num5 < 28);
  } else {
    do {
      items5[num4] = 2;
      num4 = num4 + 1;
    } while (num4 < 28);
  }
  const items7 = [];
  const fn2Result = fn2([], items3, true);
  let obj5 = {
    get() {
      const tzid = this.tzid;
      let tmp = !tzid;
      if (tzid) {
        tmp = "UTC" === this.tzid.toUpperCase();
      }
      return tmp;
    },
    enumerable: false,
    configurable: true,
  };
  let num6 = 0;
  let num7 = 0;
  if (isArray(3)) {
    do {
      let items8 = [];
      items7[num7] = items8.concat(3);
      num7 = num7 + 1;
    } while (num7 < num);
  } else {
    do {
      items7[num6] = 3;
      num6 = num6 + 1;
    } while (num6 < num);
  }
  const items9 = [];
  const fn2Result1 = fn2(fn2([], items3, true), items5, true);
  let num8 = 30;
  let num9 = 0;
  let num10 = 0;
  if (isArray(4)) {
    do {
      let items10 = [];
      items9[num10] = items10.concat(4);
      num10 = num10 + 1;
    } while (num10 < num8);
  } else {
    do {
      items9[num9] = 4;
      num9 = num9 + 1;
    } while (num9 < num8);
  }
  const items11 = [];
  const fn2Result2 = fn2(fn2(fn2([], items3, true), items5, true), items7, true);
  let num11 = 0;
  let num12 = 0;
  if (isArray(5)) {
    do {
      let items12 = [];
      items11[num12] = items12.concat(5);
      num12 = num12 + 1;
    } while (num12 < num);
  } else {
    do {
      items11[num11] = 5;
      num11 = num11 + 1;
    } while (num11 < num);
  }
  const items13 = [];
  const fn2Result3 = fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true);
  let num13 = 0;
  let num14 = 0;
  if (isArray(6)) {
    do {
      let items14 = [];
      items13[num14] = items14.concat(6);
      num14 = num14 + 1;
    } while (num14 < num8);
  } else {
    do {
      items13[num13] = 6;
      num13 = num13 + 1;
    } while (num13 < num8);
  }
  const items15 = [];
  const fn2Result4 = fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true);
  let num15 = 0;
  let num16 = 0;
  if (isArray(7)) {
    do {
      let items16 = [];
      items15[num16] = items16.concat(7);
      num16 = num16 + 1;
    } while (num16 < num);
  } else {
    do {
      items15[num15] = 7;
      num15 = num15 + 1;
    } while (num15 < num);
  }
  const items17 = [];
  const fn2Result5 = fn2(
    fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true),
    items13,
    true,
  );
  let num17 = 0;
  let num18 = 0;
  if (isArray(8)) {
    do {
      let items18 = [];
      items17[num18] = items18.concat(8);
      num18 = num18 + 1;
    } while (num18 < num);
  } else {
    do {
      items17[num17] = 8;
      num17 = num17 + 1;
    } while (num17 < num);
  }
  const items19 = [];
  const fn2Result6 = fn2(
    fn2(
      fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true),
      items13,
      true,
    ),
    items15,
    true,
  );
  let num19 = 0;
  let num20 = 0;
  if (isArray(9)) {
    do {
      let items20 = [];
      items19[num20] = items20.concat(9);
      num20 = num20 + 1;
    } while (num20 < num8);
  } else {
    do {
      items19[num19] = 9;
      num19 = num19 + 1;
    } while (num19 < num8);
  }
  const items21 = [];
  const fn2Result7 = fn2(
    fn2(
      fn2(
        fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true),
        items13,
        true,
      ),
      items15,
      true,
    ),
    items17,
    true,
  );
  let num21 = 0;
  let num22 = 0;
  if (isArray(10)) {
    do {
      let items22 = [];
      items21[num22] = items22.concat(10);
      num22 = num22 + 1;
    } while (num22 < num);
  } else {
    do {
      items21[num21] = 10;
      num21 = num21 + 1;
    } while (num21 < num);
  }
  const items23 = [];
  const fn2Result8 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true),
          items13,
          true,
        ),
        items15,
        true,
      ),
      items17,
      true,
    ),
    items19,
    true,
  );
  let num23 = 0;
  let num24 = 0;
  if (isArray(11)) {
    do {
      let items24 = [];
      items23[num24] = items24.concat(11);
      num24 = num24 + 1;
    } while (num24 < num8);
  } else {
    do {
      items23[num23] = 11;
      num23 = num23 + 1;
    } while (num23 < num8);
  }
  const items25 = [];
  const fn2Result9 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true),
            items13,
            true,
          ),
          items15,
          true,
        ),
        items17,
        true,
      ),
      items19,
      true,
    ),
    items21,
    true,
  );
  let num25 = 0;
  let num26 = 0;
  if (isArray(12)) {
    do {
      let items26 = [];
      items25[num26] = items26.concat(12);
      num26 = num26 + 1;
    } while (num26 < num);
  } else {
    do {
      items25[num25] = 12;
      num25 = num25 + 1;
    } while (num25 < num);
  }
  const items27 = [];
  const fn2Result10 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true),
              items13,
              true,
            ),
            items15,
            true,
          ),
          items17,
          true,
        ),
        items19,
        true,
      ),
      items21,
      true,
    ),
    items23,
    true,
  );
  let num27 = 0;
  let num28 = 0;
  if (isArray(1)) {
    do {
      let items28 = [];
      items27[num28] = items28.concat(1);
      num28 = num28 + 1;
    } while (num28 < 7);
  } else {
    do {
      items27[num27] = 1;
      num27 = num27 + 1;
    } while (num27 < 7);
  }
  closure_58 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true),
                  items13,
                  true,
                ),
                items15,
                true,
              ),
              items17,
              true,
            ),
            items19,
            true,
          ),
          items21,
          true,
        ),
        items23,
        true,
      ),
      items25,
      true,
    ),
    items27,
    true,
  );
  const items29 = [];
  let num29 = 0;
  let num30 = 0;
  if (isArray(1)) {
    do {
      let items30 = [];
      items29[num30] = items30.concat(1);
      num30 = num30 + 1;
    } while (num30 < num);
  } else {
    do {
      items29[num29] = 1;
      num29 = num29 + 1;
    } while (num29 < num);
  }
  const items31 = [];
  const fn2Result11 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true),
                items13,
                true,
              ),
              items15,
              true,
            ),
            items17,
            true,
          ),
          items19,
          true,
        ),
        items21,
        true,
      ),
      items23,
      true,
    ),
    items25,
    true,
  );
  let num31 = 0;
  let num32 = 0;
  if (isArray(2)) {
    do {
      let items32 = [];
      items31[num32] = items32.concat(2);
      num32 = num32 + 1;
    } while (num32 < 29);
  } else {
    do {
      items31[num31] = 2;
      num31 = num31 + 1;
    } while (num31 < 29);
  }
  const items33 = [];
  const fn2Result12 = fn2([], items29, true);
  let num33 = 0;
  let num34 = 0;
  if (isArray(3)) {
    do {
      let items34 = [];
      items33[num34] = items34.concat(3);
      num34 = num34 + 1;
    } while (num34 < num);
  } else {
    do {
      items33[num33] = 3;
      num33 = num33 + 1;
    } while (num33 < num);
  }
  const items35 = [];
  const fn2Result13 = fn2(fn2([], items29, true), items31, true);
  let num35 = 0;
  let num36 = 0;
  if (isArray(4)) {
    do {
      let items36 = [];
      items35[num36] = items36.concat(4);
      num36 = num36 + 1;
    } while (num36 < num8);
  } else {
    do {
      items35[num35] = 4;
      num35 = num35 + 1;
    } while (num35 < num8);
  }
  const items37 = [];
  const fn2Result14 = fn2(fn2(fn2([], items29, true), items31, true), items33, true);
  let num37 = 0;
  let num38 = 0;
  if (isArray(5)) {
    do {
      let items38 = [];
      items37[num38] = items38.concat(5);
      num38 = num38 + 1;
    } while (num38 < num);
  } else {
    do {
      items37[num37] = 5;
      num37 = num37 + 1;
    } while (num37 < num);
  }
  const items39 = [];
  const fn2Result15 = fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true);
  let num39 = 0;
  let num40 = 0;
  if (isArray(6)) {
    do {
      let items40 = [];
      items39[num40] = items40.concat(6);
      num40 = num40 + 1;
    } while (num40 < num8);
  } else {
    do {
      items39[num39] = 6;
      num39 = num39 + 1;
    } while (num39 < num8);
  }
  const items41 = [];
  const fn2Result16 = fn2(
    fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true),
    items37,
    true,
  );
  let num41 = 0;
  let num42 = 0;
  if (isArray(7)) {
    do {
      let items42 = [];
      items41[num42] = items42.concat(7);
      num42 = num42 + 1;
    } while (num42 < num);
  } else {
    do {
      items41[num41] = 7;
      num41 = num41 + 1;
    } while (num41 < num);
  }
  const items43 = [];
  const fn2Result17 = fn2(
    fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true),
    items39,
    true,
  );
  let num43 = 0;
  let num44 = 0;
  if (isArray(8)) {
    do {
      let items44 = [];
      items43[num44] = items44.concat(8);
      num44 = num44 + 1;
    } while (num44 < num);
  } else {
    do {
      items43[num43] = 8;
      num43 = num43 + 1;
    } while (num43 < num);
  }
  const items45 = [];
  const fn2Result18 = fn2(
    fn2(
      fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true),
      items39,
      true,
    ),
    items41,
    true,
  );
  let num45 = 0;
  let num46 = 0;
  if (isArray(9)) {
    do {
      let items46 = [];
      items45[num46] = items46.concat(9);
      num46 = num46 + 1;
    } while (num46 < num8);
  } else {
    do {
      items45[num45] = 9;
      num45 = num45 + 1;
    } while (num45 < num8);
  }
  const items47 = [];
  const fn2Result19 = fn2(
    fn2(
      fn2(
        fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true),
        items39,
        true,
      ),
      items41,
      true,
    ),
    items43,
    true,
  );
  let num47 = 0;
  let num48 = 0;
  if (isArray(10)) {
    do {
      let items48 = [];
      items47[num48] = items48.concat(10);
      num48 = num48 + 1;
    } while (num48 < num);
  } else {
    do {
      items47[num47] = 10;
      num47 = num47 + 1;
    } while (num47 < num);
  }
  const items49 = [];
  const fn2Result20 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true),
          items39,
          true,
        ),
        items41,
        true,
      ),
      items43,
      true,
    ),
    items45,
    true,
  );
  let num49 = 0;
  let num50 = 0;
  if (isArray(11)) {
    do {
      let items50 = [];
      items49[num50] = items50.concat(11);
      num50 = num50 + 1;
    } while (num50 < num8);
  } else {
    do {
      items49[num49] = 11;
      num49 = num49 + 1;
    } while (num49 < num8);
  }
  const items51 = [];
  const fn2Result21 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true),
            items39,
            true,
          ),
          items41,
          true,
        ),
        items43,
        true,
      ),
      items45,
      true,
    ),
    items47,
    true,
  );
  let num51 = 0;
  let num52 = 0;
  if (isArray(12)) {
    do {
      let items52 = [];
      items51[num52] = items52.concat(12);
      num52 = num52 + 1;
    } while (num52 < num);
  } else {
    do {
      items51[num51] = 12;
      num51 = num51 + 1;
    } while (num51 < num);
  }
  let fn2Result23 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true),
                items39,
                true,
              ),
              items41,
              true,
            ),
            items43,
            true,
          ),
          items45,
          true,
        ),
        items47,
        true,
      ),
      items49,
      true,
    ),
    items51,
    true,
  );
  let items53 = [];
  let num53 = 0;
  let num54 = 0;
  if (isArray(1)) {
    do {
      let items54 = [];
      items53[num54] = items54.concat(1);
      num54 = num54 + 1;
    } while (num54 < 7);
  } else {
    do {
      items53[num53] = 1;
      num53 = num53 + 1;
    } while (num53 < 7);
  }
  closure_59 = fn2(fn2Result23, items53, true);
  const fn2Result22 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true),
              items39,
              true,
            ),
            items41,
            true,
          ),
          items43,
          true,
        ),
        items45,
        true,
      ),
      items47,
      true,
    ),
    items49,
    true,
  );
  const fnResult = fn(1, 29);
  const fnResult2 = fn(1, num);
  const fnResult3 = fn(1, 32);
  const fnResult1 = fn(1, num8);
  closure_60 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(
                    fn2(fn2(fn2(fn2([], fnResult3, true), fn(1, num8), true), fnResult3, true), fnResult2, true),
                    fnResult3,
                    true,
                  ),
                  fnResult2,
                  true,
                ),
                fnResult3,
                true,
              ),
              fnResult3,
              true,
            ),
            fnResult2,
            true,
          ),
          fnResult3,
          true,
        ),
        fnResult2,
        true,
      ),
      fnResult3,
      true,
    ),
    fnResult3.slice(0, 7),
    true,
  );
  const fn2Result24 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(fn2(fn2(fn2([], fnResult3, true), fn(1, num8), true), fnResult3, true), fnResult2, true),
                  fnResult3,
                  true,
                ),
                fnResult2,
                true,
              ),
              fnResult3,
              true,
            ),
            fnResult3,
            true,
          ),
          fnResult2,
          true,
        ),
        fnResult3,
        true,
      ),
      fnResult2,
      true,
    ),
    fnResult3,
    true,
  );
  closure_61 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(
                    fn2(fn2(fn2(fn2([], fnResult3, true), fnResult, true), fnResult3, true), fnResult2, true),
                    fnResult3,
                    true,
                  ),
                  fnResult2,
                  true,
                ),
                fnResult3,
                true,
              ),
              fnResult3,
              true,
            ),
            fnResult2,
            true,
          ),
          fnResult3,
          true,
        ),
        fnResult2,
        true,
      ),
      fnResult3,
      true,
    ),
    fnResult3.slice(0, 7),
    true,
  );
  const fn2Result25 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(fn2(fn2(fn2([], fnResult3, true), fnResult, true), fnResult3, true), fnResult2, true),
                  fnResult3,
                  true,
                ),
                fnResult2,
                true,
              ),
              fnResult3,
              true,
            ),
            fnResult3,
            true,
          ),
          fnResult2,
          true,
        ),
        fnResult3,
        true,
      ),
      fnResult2,
      true,
    ),
    fnResult3,
    true,
  );
  const fnResult4 = fn(-28, 0);
  const fnResult6 = fn(-30, 0);
  const fnResult7 = fn(-31, 0);
  const fnResult5 = fn(-29, 0);
  closure_62 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(
                    fn2(fn2(fn2(fn2([], fnResult7, true), fn(-29, 0), true), fnResult7, true), fnResult6, true),
                    fnResult7,
                    true,
                  ),
                  fnResult6,
                  true,
                ),
                fnResult7,
                true,
              ),
              fnResult7,
              true,
            ),
            fnResult6,
            true,
          ),
          fnResult7,
          true,
        ),
        fnResult6,
        true,
      ),
      fnResult7,
      true,
    ),
    fnResult7.slice(0, 7),
    true,
  );
  fn2Result23 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(fn2(fn2(fn2([], fnResult7, true), fnResult4, true), fnResult7, true), fnResult6, true),
                  fnResult7,
                  true,
                ),
                fnResult6,
                true,
              ),
              fnResult7,
              true,
            ),
            fnResult7,
            true,
          ),
          fnResult6,
          true,
        ),
        fnResult7,
        true,
      ),
      fnResult6,
      true,
    ),
    fnResult7,
    true,
  );
  closure_63 = fn2(fn2Result23, fnResult7.slice(0, 7), true);
  closure_64 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
  closure_65 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  items53 = [];
  num8 = 55;
  num = 0;
};
if (typeof exports === "object") {
  if (typeof module === "object") {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
if (typeof exports === "object") {
  exports.rrule = fn();
} else {
  self.rrule = fn();
}
