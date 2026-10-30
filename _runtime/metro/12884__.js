// === Module 12884: ? ===

// Module 12884
import _mod12798 from "module_12798" /* 12798 */;

const Delim = _mod12798.TYPE.Delim;
const Ident = _mod12798.TYPE.Ident;
const Dimension = _mod12798.TYPE.Dimension;
const Percentage = _mod12798.TYPE.Percentage;
const Number = _mod12798.TYPE.Number;
const Hash = _mod12798.TYPE.Hash;
const Colon = _mod12798.TYPE.Colon;
const LeftSquareBracket = _mod12798.TYPE.LeftSquareBracket;

export default {
  getNode(arg0) {
    const self = this;
    const tokenType = this.scanner.tokenType;
    if (LeftSquareBracket === tokenType) {
      return self.AttributeSelector();
    } else if (Hash === tokenType) {
      return self.IdSelector();
    } else if (Colon === tokenType) {
      const scanner = self.scanner;
      if (scanner.lookupType(1) === tmp6) {
        let result = self.PseudoElementSelector();
      } else {
        result = self.PseudoClassSelector();
      }
      return result;
    } else if (Ident === tokenType) {
      return self.TypeSelector();
    } else {
      if (Number !== tokenType) {
        if (Percentage !== tokenType) {
          if (Dimension === tokenType) {
            const source = self.scanner.source;
            if (46 === source.charCodeAt(self.scanner.tokenStart)) {
              self.error("Identifier is expected", self.scanner.tokenStart + 1);
            }
          } else if (Delim === tokenType) {
            const source2 = self.scanner.source;
            const charCodeAtResult = source2.charCodeAt(self.scanner.tokenStart);
            if (43 !== charCodeAtResult) {
              if (62 !== charCodeAtResult) {
                if (126 !== charCodeAtResult) {
                  if (47 === charCodeAtResult) {
                    return self.Combinator();
                  } else if (46 === charCodeAtResult) {
                    return self.ClassSelector();
                  } else {
                    if (42 !== charCodeAtResult) {
                      if (124 !== charCodeAtResult) {
                        if (35 === charCodeAtResult) {
                          return self.IdSelector();
                        }
                      }
                    }
                    return self.TypeSelector();
                  }
                }
              }
            }
            arg0.space = null;
            arg0.ignoreWSAfter = true;
            return self.Combinator();
          }
        }
      }
      return self.Percentage();
    }
  }
};