// === Module 12854: ? ===

// Module 12854
function getTrace(arg0) {
  closure_0 = arg0;
  c1 = null;
  if (null !== this.matched) {
    function hasMatch(matched) {
      if (Array.isArray(matched.match)) {
        let num = 0;
        if (0 < matched.match.length) {
          while (!hasMatch(matched.match[num])) {
            num = num + 1;
          }
          const syntax = matched.syntax;
          let tmp7 = null !== syntax;
          if (tmp7) {
            let tmp8 = "Type" === syntax.type;
            if (!tmp8) {
              tmp8 = "Property" === syntax.type;
            }
            if (!tmp8) {
              tmp8 = "Keyword" === syntax.type;
            }
            tmp7 = tmp8;
          }
          if (tmp7) {
            items1.unshift(matched.syntax);
          }
          return true;
        }
      } else if (matched.node === closure_0) {
        const syntax2 = matched.syntax;
        let tmp3 = null !== syntax2;
        if (tmp3) {
          let tmp2 = "Type" === syntax2.type;
          if (!tmp2) {
            tmp2 = "Property" === syntax2.type;
          }
          if (!tmp2) {
            tmp2 = "Keyword" === syntax2.type;
          }
          tmp3 = tmp2;
        }
        if (tmp3) {
          const items = [matched.syntax];
          items1 = items;
        } else {
          items1 = [];
        }
        return true;
      }
      return false;
    }
    hasMatch(tmp.matched);
  }
  return c1;
}

export default {
  getTrace,
  isType(arg0, arg1) {
    const self = this;
    closure_0 = arg1;
    const call = getTrace.call;
    if (typeof call === "unknown") {
      closure_0 = arg0;
      c1 = null;
      if (null !== self.matched) {
        function hasMatch(matched) {
          if (Array.isArray(matched.match)) {
            let num = 0;
            if (0 < matched.match.length) {
              while (!hasMatch(matched.match[num])) {
                num = num + 1;
              }
              const syntax = matched.syntax;
              let tmp7 = null !== syntax;
              if (tmp7) {
                let tmp8 = "Type" === syntax.type;
                if (!tmp8) {
                  tmp8 = "Property" === syntax.type;
                }
                if (!tmp8) {
                  tmp8 = "Keyword" === syntax.type;
                }
                tmp7 = tmp8;
              }
              if (tmp7) {
                items1.unshift(matched.syntax);
              }
              return true;
            }
          } else if (matched.node === closure_0) {
            const syntax2 = matched.syntax;
            let tmp3 = null !== syntax2;
            if (tmp3) {
              let tmp2 = "Type" === syntax2.type;
              if (!tmp2) {
                tmp2 = "Property" === syntax2.type;
              }
              if (!tmp2) {
                tmp2 = "Keyword" === syntax2.type;
              }
              tmp3 = tmp2;
            }
            if (tmp3) {
              const items = [matched.syntax];
              items1 = items;
            } else {
              items1 = [];
            }
            return true;
          }
          return false;
        }
        hasMatch(self.matched);
      }
      let callResult = c1;
    } else {
      callResult = call(self, arg0);
    }
    return null !== callResult && callResult.some((type) => {
      let tmp = "Type" === type.type;
      if (tmp) {
        tmp = type.name === closure_0;
      }
      return tmp;
    });
  },
  isProperty(arg0, arg1) {
    const self = this;
    closure_0 = arg1;
    const call = getTrace.call;
    if (typeof call === "unknown") {
      closure_0 = arg0;
      c1 = null;
      if (null !== self.matched) {
        function hasMatch(matched) {
          if (Array.isArray(matched.match)) {
            let num = 0;
            if (0 < matched.match.length) {
              while (!hasMatch(matched.match[num])) {
                num = num + 1;
              }
              const syntax = matched.syntax;
              let tmp7 = null !== syntax;
              if (tmp7) {
                let tmp8 = "Type" === syntax.type;
                if (!tmp8) {
                  tmp8 = "Property" === syntax.type;
                }
                if (!tmp8) {
                  tmp8 = "Keyword" === syntax.type;
                }
                tmp7 = tmp8;
              }
              if (tmp7) {
                items1.unshift(matched.syntax);
              }
              return true;
            }
          } else if (matched.node === closure_0) {
            const syntax2 = matched.syntax;
            let tmp3 = null !== syntax2;
            if (tmp3) {
              let tmp2 = "Type" === syntax2.type;
              if (!tmp2) {
                tmp2 = "Property" === syntax2.type;
              }
              if (!tmp2) {
                tmp2 = "Keyword" === syntax2.type;
              }
              tmp3 = tmp2;
            }
            if (tmp3) {
              const items = [matched.syntax];
              items1 = items;
            } else {
              items1 = [];
            }
            return true;
          }
          return false;
        }
        hasMatch(self.matched);
      }
      let callResult = c1;
    } else {
      callResult = call(self, arg0);
    }
    return null !== callResult && callResult.some((type) => {
      let tmp = "Property" === type.type;
      if (tmp) {
        tmp = type.name === closure_0;
      }
      return tmp;
    });
  },
  isKeyword(arg0) {
    const self = this;
    const call = getTrace.call;
    if (typeof call === "unknown") {
      closure_0 = arg0;
      let items1 = null;
      if (null !== self.matched) {
        function hasMatch(matched) {
          if (Array.isArray(matched.match)) {
            let num = 0;
            if (0 < matched.match.length) {
              while (!hasMatch(matched.match[num])) {
                num = num + 1;
              }
              const syntax = matched.syntax;
              let tmp7 = null !== syntax;
              if (tmp7) {
                let tmp8 = "Type" === syntax.type;
                if (!tmp8) {
                  tmp8 = "Property" === syntax.type;
                }
                if (!tmp8) {
                  tmp8 = "Keyword" === syntax.type;
                }
                tmp7 = tmp8;
              }
              if (tmp7) {
                items1.unshift(matched.syntax);
              }
              return true;
            }
          } else if (matched.node === closure_0) {
            const syntax2 = matched.syntax;
            let tmp3 = null !== syntax2;
            if (tmp3) {
              let tmp2 = "Type" === syntax2.type;
              if (!tmp2) {
                tmp2 = "Property" === syntax2.type;
              }
              if (!tmp2) {
                tmp2 = "Keyword" === syntax2.type;
              }
              tmp3 = tmp2;
            }
            if (tmp3) {
              const items = [matched.syntax];
              items1 = items;
            } else {
              items1 = [];
            }
            return true;
          }
          return false;
        }
        hasMatch(self.matched);
      }
      let callResult = items1;
    } else {
      callResult = call(self, arg0);
    }
    let someResult = null !== callResult;
    if (someResult) {
      someResult = callResult.some((type) => "Keyword" === type.type);
    }
    return someResult;
  }
};