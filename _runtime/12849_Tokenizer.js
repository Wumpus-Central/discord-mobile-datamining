// _runtime/12849_Tokenizer.js
import _mod12850 from "metro/12850__.js";

function buildGroupMatchGraph(combinator, terms, arg2) {
  let obj;
  if (" " === combinator) {
    let diff = terms.length - 1;
    let tmp65 = obj;
    let tmp66 = obj;
    if (0 <= diff) {
      do {
        let tmp67 = terms[diff];
        closure_0 = tmp67;
        let tmp68 = obj2;
        let tmp69 = obj;
        let tmp70 = tmp65 === obj;
        then5 = tmp65;
        if (!tmp70) {
          if (tmp67 === tmp69) {
            if (tmp70) {
              let tmp72 = tmp67;
            }
          }
          let tmp73 = "If" === tmp67.type && tmp67.else === tmp68 && tmp70;
          match5 = tmp67;
          if (tmp73) {
            ({ then: then5, match: match5 } = tmp67);
          }
          obj2 = { type: "If", match: match5, then: then5, else: tmp68 };
          tmp72 = obj2;
        } else {
          tmp72 = tmp67;
        }
        diff = diff - 1;
        tmp65 = tmp72;
        tmp66 = tmp72;
      } while (0 <= diff);
    }
    return tmp66;
  } else if ("|" === combinator) {
    let diff1 = terms.length - 1;
    let tmp32 = null;
    let tmp33 = obj2;
    let tmp34 = obj2;
    if (0 <= diff1) {
      while (true) {
        let tmp35 = terms[diff1];
        closure_0 = tmp35;
        let tmp36 = "Keyword" === tmp35.type;
        let tmp37 = tmp32;
        if (!tmp36) {
          tmp36 = "AtKeyword" === tmp35.type;
        }
        if (!tmp36) {
          tmp36 = "Function" === tmp35.type;
        }
        if (!tmp36) {
          let tmp40 = "Type" === tmp35.type;
          if (tmp40) {
            let name = tmp35.name;
            let tmp41 =
              name.length > 2 && 40 === name.charCodeAt(name.length - 2) && 41 === name.charCodeAt(name.length - 1);
            tmp40 = tmp41;
          }
          tmp36 = tmp40;
        }
        let tmp42 = tmp33;
        if (tmp36) {
          let tmp43 = null === tmp37 && diff1 > 0;
          if (tmp43) {
            let tmp44 = terms[diff1 - 1];
            let tmp45 = "Keyword" === tmp44.type || "AtKeyword" === tmp44.type || "Function" === tmp44.type;
            if (!tmp45) {
              let tmp46 = "Type" === tmp44.type;
              if (tmp46) {
                let name1 = tmp44.name;
                let tmp47 =
                  name1.length > 2 &&
                  40 === name1.charCodeAt(name1.length - 2) &&
                  41 === name1.charCodeAt(name1.length - 1);
                tmp46 = tmp47;
              }
              tmp45 = tmp46;
            }
            tmp43 = tmp45;
          }
          let tmp48 = tmp33;
          if (tmp43) {
            obj3 = { type: "Enum", map: null };
            let _Object = Object;
            let obj4 = Object.create(null);
            obj3.map = obj4;
            then3 = obj;
            let tmp50 = obj === obj;
            if (!tmp50) {
              if (obj3 === then3) {
                if (tmp50) {
                  let tmp52 = obj3;
                }
              }
              let tmp53 = "If" === obj3.type;
              if (tmp53) {
                tmp53 = obj3.else === obj2;
              }
              if (tmp53) {
                tmp53 = tmp50;
              }
              match3 = obj3;
              if (tmp53) {
                ({ then: then3, match: match3 } = obj3);
              }
              let obj5 = { type: "If", match: match3, then: then3, else: tmp33 };
              tmp52 = obj5;
            } else {
              tmp52 = obj3;
            }
            tmp48 = tmp52;
            tmp37 = obj4;
          }
          tmp42 = tmp48;
          if (null !== tmp37) {
            let name2 = tmp35.name;
            let tmp55 =
              name2.length > 2 &&
              40 === name2.charCodeAt(name2.length - 2) &&
              41 === name2.charCodeAt(name2.length - 1);
            let name3 = tmp35.name;
            if (tmp55) {
              let str7 = name3.slice(0, -1);
            } else {
              str7 = name3;
            }
            let formatted = str7.toLowerCase();
            tmp42 = tmp48;
            if (formatted in tmp37 === false) {
              tmp37[formatted] = tmp35;
              let tmp62 = tmp37;
              let tmp59 = tmp48;
              diff1 = diff1 - 1;
              tmp32 = tmp62;
              tmp33 = tmp59;
              tmp34 = tmp59;
              if (0 > diff1) {
                break;
              }
            }
          }
        }
        then4 = obj;
        let tmp57 = obj === obj;
        if (!tmp57) {
          if (tmp35 === then4) {
            if (tmp57) {
              tmp59 = tmp35;
            }
          }
          let tmp60 = "If" === tmp35.type;
          if (tmp60) {
            tmp60 = tmp35.else === obj2;
          }
          if (tmp60) {
            tmp60 = tmp57;
          }
          match4 = tmp35;
          if (tmp60) {
            ({ then: then4, match: match4 } = tmp35);
          }
          let obj6 = { type: "If", match: match4, then: then4, else: tmp42 };
          tmp59 = obj6;
        } else {
          tmp59 = tmp35;
        }
        tmp62 = null;
      }
    }
    return tmp34;
  } else if ("&&" === combinator) {
    if (terms.length > 5) {
      const obj7 = { type: "MatchOnce", terms, all: true };
      return obj7;
    } else {
      let diff2 = terms.length - 1;
      let tmp26 = obj2;
      let tmp27 = obj2;
      if (0 <= diff2) {
        do {
          let tmp15 = terms[diff2];
          closure_0 = tmp15;
          if (terms.length > 1) {
            then2 = buildGroupMatchGraph(
              combinator,
              terms.filter((item) => item !== closure_0),
              false,
            );
          } else {
            then2 = obj;
          }
          let tmp19 = obj;
          let tmp20 = then2 === obj;
          if (!tmp20) {
            if (tmp15 === tmp19) {
              if (tmp20) {
                let tmp22 = tmp15;
              }
            }
            let tmp23 = "If" === tmp15.type;
            if (tmp23) {
              tmp23 = tmp15.else === obj2;
            }
            if (tmp23) {
              tmp23 = tmp20;
            }
            match2 = tmp15;
            if (tmp23) {
              ({ then: then2, match: match2 } = tmp15);
            }
            let obj8 = { type: "If", match: match2, then: then2, else: tmp26 };
            tmp22 = obj8;
          } else {
            tmp22 = tmp15;
          }
          diff2 = diff2 - 1;
          tmp26 = tmp22;
          tmp27 = tmp22;
        } while (0 <= diff2);
      }
      return tmp27;
    }
  } else if ("||" === combinator) {
    if (terms.length > 5) {
      const obj16 = { type: "MatchOnce", terms, all: false };
      return obj16;
    } else {
      const tmp = arg2 ? obj : obj2;
      let diff3 = terms.length - 1;
      let tmp3 = tmp;
      let tmp4 = tmp;
      if (0 <= diff3) {
        do {
          let tmp5 = terms[diff3];
          closure_0 = tmp5;
          if (terms.length > 1) {
            then = buildGroupMatchGraph(
              combinator,
              terms.filter((item) => item !== closure_0),
              true,
            );
          } else {
            then = obj;
          }
          let tmp9 = obj;
          let tmp10 = then === obj;
          if (!tmp10) {
            if (tmp5 === tmp9) {
              if (tmp10) {
                let tmp12 = tmp5;
              }
            }
            let tmp13 = "If" === tmp5.type;
            if (tmp13) {
              tmp13 = tmp5.else === obj2;
            }
            if (tmp13) {
              tmp13 = tmp10;
            }
            match = tmp5;
            if (tmp13) {
              ({ then, match } = tmp5);
            }
            obj = { type: "If", match, then, else: tmp3 };
            tmp12 = obj;
          } else {
            tmp12 = tmp5;
          }
          diff3 = diff3 - 1;
          tmp3 = tmp12;
          tmp4 = tmp12;
        } while (0 <= diff3);
      }
      return tmp4;
    }
  }
}
function buildMatchGraph(type) {
  if (typeof type === "function") {
    const obj4 = { type: "Generic", fn: type };
    return obj4;
  } else {
    switch (type.type) {
      case "Group":
        const terms = type.terms;
        const tmp54 = buildGroupMatchGraph(type.combinator, terms.map(buildMatchGraph), false);
        let tmp55 = tmp54;
        if (type.disallowEmpty) {
          then11 = obj3;
          if (obj3 !== obj) {
            if (tmp54 === tmp57) {
              if (tmp58) {
                let tmp59 = tmp54;
              }
            }
            let tmp60 = "If" === tmp54.type;
            if (tmp60) {
              tmp60 = tmp54.else === obj2;
            }
            if (tmp60) {
              tmp60 = tmp58;
            }
            match11 = tmp54;
            if (tmp60) {
              ({ then: then11, match: match11 } = tmp54);
            }
            const obj8 = { type: "If", match: match11, then: then11, else: obj2 };
            tmp59 = obj8;
          } else {
            tmp59 = tmp54;
          }
          tmp55 = tmp59;
          tmp57 = obj;
        }
        return tmp55;
      case "Multiplier":
        const tmp3 = buildMatchGraph(type.term);
        if (0 === type.max) {
          then4 = obj3;
          if (obj3 !== tmp) {
            if (tmp3 === tmp) {
              if (tmp26) {
                let tmp27 = tmp3;
              }
            }
            let tmp28 = "If" === tmp3.type;
            if (tmp28) {
              tmp28 = tmp3.else === obj2;
            }
            if (tmp28) {
              tmp28 = tmp26;
            }
            match4 = tmp3;
            if (tmp28) {
              ({ then: then4, match: match4 } = tmp3);
            }
            const obj9 = { type: "If", match: match4, then: then4, else: obj2 };
            tmp27 = obj9;
          } else {
            tmp27 = tmp3;
          }
          let flag = "If" === tmp27.type;
          if (flag) {
            flag = tmp27.else === obj2;
          }
          if (flag) {
            flag = false;
          }
          then5 = null;
          match5 = tmp27;
          if (flag) {
            ({ then: then5, match: match5 } = tmp27);
          }
          const obj10 = { type: "If", match: match5, then: then5, else: obj2 };
          if (!true) {
            if (flag2) {
              if (flag2) {
                let tmp29 = tmp;
              }
            }
            let tmp30 = "If" === tmp.type;
            if (tmp30) {
              tmp30 = tmp.else === obj2;
            }
            if (tmp30) {
              tmp30 = flag2;
            }
            then6 = tmp;
            match6 = tmp;
            if (tmp30) {
              ({ then: then6, match: match6 } = tmp);
            }
            const obj11 = { type: "If", match: match6, then: then6, else: obj10 };
            tmp29 = obj11;
          } else {
            tmp29 = tmp;
          }
          obj10.then = tmp29;
          let tmp5 = tmp;
          let tmp6 = tmp27;
          let tmp7 = obj10;
          if (type.comma) {
            const obj12 = { type: "Comma", syntax: type };
            if (obj10 !== tmp) {
              if (obj12 === tmp) {
                if (tmp31) {
                  let tmp32 = obj12;
                }
              }
              let tmp33 = "If" === obj12.type;
              if (tmp33) {
                tmp33 = obj12.else === obj2;
              }
              if (tmp33) {
                tmp33 = tmp31;
              }
              then7 = obj10;
              match7 = obj12;
              if (tmp33) {
                ({ then: then7, match: match7 } = obj12);
              }
              const obj13 = { type: "If", match: match7, then: then7, else: obj2 };
              tmp32 = obj13;
            } else {
              tmp32 = obj12;
            }
            obj10.then.else = tmp32;
            tmp5 = tmp;
            tmp6 = tmp27;
            tmp7 = obj10;
          }
        } else {
          let num6 = type.min;
          if (!num6) {
            num6 = 1;
          }
          let tmp4 = tmp;
          tmp5 = tmp;
          tmp6 = tmp3;
          tmp7 = tmp;
          while (num6 <= type.max) {
            let comma = type.comma;
            then = tmp4;
            if (comma) {
              comma = then !== obj;
            }
            let tmp10 = then;
            if (comma) {
              let obj14 = { type: "Comma", syntax: type };
              let tmp12 = obj;
              let tmp13 = then === obj;
              if (!tmp13) {
                if (obj14 === tmp12) {
                  if (tmp13) {
                    let tmp14 = obj14;
                  }
                }
                let tmp15 = "If" === obj14.type;
                if (tmp15) {
                  tmp15 = obj14.else === obj2;
                }
                if (tmp15) {
                  tmp15 = tmp13;
                }
                match = obj14;
                if (tmp15) {
                  ({ then, match } = obj14);
                }
                let obj15 = { type: "If", match, then, else: obj2 };
                tmp14 = obj15;
              } else {
                tmp14 = obj14;
              }
              tmp10 = tmp14;
            }
            let tmp16 = obj;
            let tmp17 = obj === obj;
            if (!tmp17) {
              if (tmp17) {
                if (tmp17) {
                  then2 = tmp16;
                }
              }
              let tmp19 = "If" === tmp16.type;
              if (tmp19) {
                tmp19 = tmp16.else === obj2;
              }
              if (tmp19) {
                tmp19 = tmp17;
              }
              then3 = tmp16;
              match2 = tmp16;
              if (tmp19) {
                ({ then: then3, match: match2 } = tmp16);
              }
              let obj16 = { type: "If", match: match2, then: then3, else: tmp10 };
              then2 = obj16;
            } else {
              then2 = tmp16;
            }
            let tmp22 = then2 === tmp16;
            if (!tmp22) {
              if (tmp3 === tmp16) {
                if (tmp22) {
                  let tmp23 = tmp3;
                }
              }
              let tmp24 = "If" === tmp3.type;
              if (tmp24) {
                tmp24 = tmp3.else === obj2;
              }
              if (tmp24) {
                tmp24 = tmp22;
              }
              match3 = tmp3;
              if (tmp24) {
                ({ then: then2, match: match3 } = tmp3);
              }
              let obj17 = { type: "If", match: match3, then: then2, else: obj2 };
              tmp23 = obj17;
            } else {
              tmp23 = tmp3;
            }
            num6 = num6 + 1;
            tmp4 = tmp23;
            tmp5 = tmp16;
            tmp6 = tmp3;
            tmp7 = tmp23;
          }
        }
        if (0 === type.min) {
          if (!true) {
            if (flag3) {
              if (flag3) {
                let tmp49 = tmp5;
              }
            }
            let tmp50 = "If" === tmp5.type;
            if (tmp50) {
              tmp50 = tmp5.else === obj2;
            }
            if (tmp50) {
              tmp50 = flag3;
            }
            then10 = tmp5;
            match10 = tmp5;
            if (tmp50) {
              ({ then: then10, match: match10 } = tmp5);
            }
            const obj18 = { type: "If", match: match10, then: then10, else: tmp7 };
            tmp49 = obj18;
          } else {
            tmp49 = tmp5;
          }
          let tmp47 = tmp49;
        } else {
          let tmp46 = tmp7;
          tmp47 = tmp7;
          let num7 = 0;
          if (0 < type.min - 1) {
            do {
              let comma2 = type.comma;
              then8 = tmp46;
              if (comma2) {
                comma2 = then8 !== obj;
              }
              then9 = then8;
              if (comma2) {
                let obj19 = { type: "Comma", syntax: type };
                let tmp37 = obj;
                let tmp38 = then8 === obj;
                if (!tmp38) {
                  if (obj19 === tmp37) {
                    if (tmp38) {
                      let tmp39 = obj19;
                    }
                  }
                  let tmp40 = "If" === obj19.type;
                  if (tmp40) {
                    tmp40 = obj19.else === obj2;
                  }
                  if (tmp40) {
                    tmp40 = tmp38;
                  }
                  match8 = obj19;
                  if (tmp40) {
                    ({ then: then8, match: match8 } = obj19);
                  }
                  let obj20 = { type: "If", match: match8, then: then8, else: obj2 };
                  tmp39 = obj20;
                } else {
                  tmp39 = obj19;
                }
                then9 = tmp39;
              }
              let tmp42 = obj;
              let tmp43 = then9 === obj;
              if (!tmp43) {
                if (tmp6 === tmp42) {
                  if (tmp43) {
                    let tmp44 = tmp6;
                  }
                }
                let tmp45 = "If" === tmp6.type;
                if (tmp45) {
                  tmp45 = tmp6.else === obj2;
                }
                if (tmp45) {
                  tmp45 = tmp43;
                }
                match9 = tmp6;
                if (tmp45) {
                  ({ then: then9, match: match9 } = tmp6);
                }
                let obj21 = { type: "If", match: match9, then: then9, else: obj2 };
                tmp44 = obj21;
              } else {
                tmp44 = tmp6;
              }
              num7 = num7 + 1;
              tmp46 = tmp44;
              tmp47 = tmp44;
            } while (num7 < type.min - 1);
          }
        }
        return tmp47;
      case "Type":
        let obj22 = { type: type.type, name: type.name, syntax: type };
        return obj22;
      case "Property":
        obj22 = { type: type.type, name: type.name, syntax: type };
        return obj22;
      case "Keyword":
        const obj23 = { type: null, name: null, syntax: null };
        ({ type: obj7.type, name: name3 } = type);
        obj23.name = name3.toLowerCase();
        obj23.syntax = type;
        return obj23;
      case "AtKeyword":
        const obj45 = { type: null, name: null, syntax: null };
        ({ type: obj6.type, name: name2 } = type);
        obj45.name = "@" + name2.toLowerCase();
        obj45.syntax = type;
        return obj45;
      case "Function":
        const obj46 = { type: null, name: null, syntax: null };
        ({ type: obj5.type, name } = type);
        obj46.name = name.toLowerCase() + "(";
        obj46.syntax = type;
        return obj46;
      case "String":
        if (3 === type.value.length) {
          const obj47 = { type: "Token", value: type.value.charAt(1), syntax: type };
          let obj48 = obj47;
        } else {
          obj48 = { type: null, value: null, syntax: null };
          ({ type: obj3.type, value } = type);
          obj48.value = value.substr(1, type.value.length - 2).replace(/\\'/g, "'");
          obj48.syntax = type;
          const str = value.substr(1, type.value.length - 2);
        }
        return obj48;
      case "Token":
        const obj49 = { type: null, value: null, syntax: null };
        ({ type: obj2.type, value: obj2.value } = type);
        obj49.syntax = type;
        return obj49;
      case "Comma":
        obj = { type: type.type, syntax: type };
        return obj;
      default:
        const _Error = Error;
        const error = new Error("Unknown node type:", type.type);
        throw error;
    }
  }
}
const MATCH = { type: "Match" };
let obj2 = { type: "Mismatch" };
let obj3 = { type: "DisallowEmpty" };

export default {
  MATCH,
  MISMATCH: obj2,
  DISALLOW_EMPTY: obj3,
  buildMatchGraph(str, arg1) {
    let tmp = str;
    if (typeof str === "string") {
      tmp = _mod12850(str);
    }
    let tmp2 = arg1;
    const obj = { type: "MatchGraph", match: buildMatchGraph(tmp), syntax: null, source: null };
    if (!arg1) {
      tmp2 = null;
    }
    obj.syntax = tmp2;
    obj.source = tmp;
    return obj;
  },
};
