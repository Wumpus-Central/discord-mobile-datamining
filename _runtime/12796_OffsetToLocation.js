// === Module 12796: OffsetToLocation ===

// Module 12796 (OffsetToLocation)
import adoptBuffer from "adoptBuffer" /* 12797 */;
import _mod12798 from "module_12798" /* 12798 */;

class OffsetToLocation {
  constructor() {
    return;
  }
}
OffsetToLocation.prototype = {
  setSource(source, offset, line, column) {
    const obj = { source };
    let num = 0;
    if (undefined !== offset) {
      num = offset;
    }
    obj.startOffset = num;
    let num2 = 1;
    let num3 = 1;
    if (undefined !== line) {
      num3 = line;
    }
    obj.startLine = num3;
    if (undefined !== column) {
      num2 = column;
    }
    obj.startColumn = num2;
    obj.linesAndColumnsComputed = false;
  },
  ensureLinesAndColumnsComputed() {
    const self = this;
    if (!this.linesAndColumnsComputed) {
      const source = self.source;
      const tmp3 = adoptBuffer(self.lines, source.length);
      const startLine = self.startLine;
      const tmp4 = adoptBuffer(self.columns, source.length);
      const startColumn = self.startColumn;
      let num2 = 0;
      if (source.length > 0) {
        num2 = _mod12798.isBOM(source.charCodeAt(0));
        const tmpResult = _mod12798;
      }
      let sum3 = num2;
      let tmp6 = startColumn;
      let tmp7 = startLine;
      let tmp8 = startColumn;
      let tmp9 = startLine;
      let tmp10 = num2;
      if (num2 < source.length) {
        do {
          let charCodeAtResult = source.charCodeAt(sum3);
          tmp3[sum3] = tmp7;
          let tmp12 = +tmp6;
          tmp4[sum3] = tmp12;
          let tmp13 = 10 !== charCodeAtResult;
          if (tmp13) {
            tmp13 = 13 !== charCodeAtResult;
          }
          if (tmp13) {
            tmp13 = 12 !== charCodeAtResult;
          }
          let sum = tmp12 + 1;
          let tmp17 = sum3;
          let num7 = sum;
          let sum2 = tmp7;
          if (!tmp13) {
            let tmp19 = 13 === charCodeAtResult && sum3 + 1 < length && 10 === source.charCodeAt(sum3 + 1);
            let tmp20 = sum3;
            if (tmp19) {
              let sum1 = sum3 + 1;
              tmp3[sum1] = tmp7;
              tmp4[sum1] = sum;
              tmp20 = sum1;
            }
            sum2 = tmp7 + 1;
            tmp17 = tmp20;
            num7 = 1;
          }
          sum3 = tmp17 + 1;
          tmp6 = num7;
          tmp7 = sum2;
          tmp8 = num7;
          tmp9 = sum2;
          tmp10 = sum3;
        } while (sum3 < length);
      }
      tmp3[tmp10] = tmp9;
      tmp4[tmp10] = tmp8;
      self.lines = tmp3;
      self.columns = tmp4;
      self.linesAndColumnsComputed = true;
    }
  },
  getLocation(arg0, source) {
    const result = this.ensureLinesAndColumnsComputed();
    return { source, offset: this.startOffset + arg0, line: this.lines[arg0], column: this.columns[arg0] };
  },
  getLocationRange(tokenStart, tokenStart2, filename) {
    const result = this.ensureLinesAndColumnsComputed();
    return { source: filename, start: { offset: this.startOffset + tokenStart, line: this.lines[tokenStart], column: this.columns[tokenStart] }, end: { offset: this.startOffset + tokenStart2, line: this.lines[tokenStart2], column: this.columns[tokenStart2] } };
  }
};

export default OffsetToLocation;