// _runtime/metro/12742__.js
import _mod12657 from "12657__.js";

const Ident = _mod12657.TYPE.Ident;
const String = _mod12657.TYPE.String;
const Number = _mod12657.TYPE.Number;
const Function = _mod12657.TYPE.Function;
const Url = _mod12657.TYPE.Url;
const Hash = _mod12657.TYPE.Hash;
const Dimension = _mod12657.TYPE.Dimension;
const Percentage = _mod12657.TYPE.Percentage;
const LeftParenthesis = _mod12657.TYPE.LeftParenthesis;
const LeftSquareBracket = _mod12657.TYPE.LeftSquareBracket;
const Comma = _mod12657.TYPE.Comma;
const Delim = _mod12657.TYPE.Delim;

export default function defaultRecognizer(recognizer) {
  const self = this;
  const tokenType = this.scanner.tokenType;
  if (Hash === tokenType) {
    return self.Hash();
  } else if (Comma === tokenType) {
    recognizer.space = null;
    recognizer.ignoreWSAfter = true;
    return self.Operator();
  } else if (LeftParenthesis === tokenType) {
    return self.Parentheses(self.readSequence, recognizer.recognizer);
  } else if (LeftSquareBracket === tokenType) {
    return self.Brackets(self.readSequence, recognizer.recognizer);
  } else if (String === tokenType) {
    return self.String();
  } else if (Dimension === tokenType) {
    return self.Dimension();
  } else if (Percentage === tokenType) {
    return self.Percentage();
  } else if (Number === tokenType) {
    return self.Number();
  } else if (Function === tokenType) {
    const obj3 = _mod12657;
    if (obj3.cmpStr(self.scanner.source, self.scanner.tokenStart, self.scanner.tokenEnd, "url(")) {
      let UrlResult = self.Url();
    } else {
      UrlResult = self.Function(self.readSequence, recognizer.recognizer);
    }
    return UrlResult;
  } else if (Url === tokenType) {
    return self.Url();
  } else if (Ident === tokenType) {
    if (obj.cmpChar(self.scanner.source, self.scanner.tokenStart, 117)) {
      if (tmp3Result.cmpChar(self.scanner.source, self.scanner.tokenStart + 1, 43)) {
        let UnicodeRangeResult = self.UnicodeRange();
      }
      return UnicodeRangeResult;
    }
    UnicodeRangeResult = self.Identifier();
    obj = _mod12657;
  } else if (Delim === tokenType) {
    const source = self.scanner.source;
    const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
    if (47 !== charCodeAtResult) {
      if (42 !== charCodeAtResult) {
        if (43 !== charCodeAtResult) {
          if (45 !== charCodeAtResult) {
            if (35 === charCodeAtResult) {
              self.error("Hex or identifier is expected", self.scanner.tokenStart + 1);
            }
          }
        }
      }
    }
    return self.Operator();
  }
}
