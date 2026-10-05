// _runtime/01899_Compiler.js
class Compiler {
  constructor(arg0, arg1, arg2) {}
  compile(arg0) {
    const obj = { pluralStack: [], currentPlural: null, pluralNumberFormat: null };
    return obj.compileMessage(arg0);
  }
  compileMessage(type) {
    const self = this;
    const tmp = type;
    if (tmp) {
      if ("messageFormatPattern" === type.type) {
        const elements = type.elements;
        const items = [];
        let num = 0;
        if (0 < elements.length) {
          while (true) {
            let tmp2 = elements[num];
            type = tmp2.type;
            if ("messageTextElement" === type) {
              let arr = items.push(self.compileMessageText(tmp2));
            } else if ("argumentElement" !== type) {
              break;
            } else {
              let arr2 = items.push(self.compileArgument(tmp2));
            }
            num = num + 1;
          }
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error = new Error("Message element does not have a valid type");
          throw error;
        }
        return items;
      }
    }
    const error1 = new Error('Message AST is not of type: "messageFormatPattern"');
    throw error1;
  }
  compileMessageText(value) {
    const self = this;
    if (this.currentPlural) {
      let replaced;
      const obj = /(^|[^\\])#/g;
      if (obj.test(value.value)) {
        if (!self.pluralNumberFormat) {
          const _Intl = Intl;
          const self2 = this;
          const self3 = this;
          const numberFormat = new Intl.NumberFormat(self.locales);
          self.pluralNumberFormat = numberFormat;
        }
        const id = self.currentPlural.id;
        const offset = self.currentPlural.format.offset;
        const pluralNumberFormat = self.pluralNumberFormat;
        value = value.value;
        Object.create(PluralOffsetString.prototype);
        replaced = { id, offset, numberFormat: pluralNumberFormat, string: value };
        const obj4 = { id, offset, numberFormat: pluralNumberFormat, string: value };
      }
      return replaced;
    }
    const str = value.value;
    replaced = str.replace(/\\#/g, "#");
  }
  compileArgument(format) {
    let dateTimeFormat;
    let dateTimeFormat1;
    let formats;
    let locales;
    let numberFormat;
    let offset;
    let ordinal;
    format = format.format;
    if (format) {
      const self = this;
      ({ formats, locales } = this);
      const type = format.type;
      if ("numberFormat" === type) {
        const _Intl3 = Intl;
        const self8 = this;
        const self9 = this;
        const obj2 = { id: format.id, format: numberFormat.format };
        numberFormat = new Intl.NumberFormat(locales, formats.number[format.style]);
        return obj2;
      } else if ("dateFormat" === type) {
        const _Intl2 = Intl;
        const self6 = this;
        const self7 = this;
        const obj3 = { id: format.id, format: dateTimeFormat.format };
        dateTimeFormat = new Intl.DateTimeFormat(locales, formats.date[format.style]);
        return obj3;
      } else if ("timeFormat" === type) {
        const _Intl = Intl;
        const self4 = this;
        const self5 = this;
        const obj4 = { id: format.id, format: dateTimeFormat1.format };
        dateTimeFormat1 = new Intl.DateTimeFormat(locales, formats.time[format.style]);
        return obj4;
      } else if ("pluralFormat" === type) {
        const id3 = format.id;
        ({ ordinal, offset } = format);
        const compileOptionsResult = self.compileOptions(format);
        Object.create(PluralFormat.prototype);
        return { id: id3, useOrdinal: ordinal, offset, options: compileOptionsResult, pluralFn: tmp3 };
      } else if ("selectFormat" === type) {
        const id2 = format.id;
        const compileOptionsResult1 = self.compileOptions(format);
        Object.create(SelectFormat.prototype);
        return { id: id2, options: compileOptionsResult1 };
      } else {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("Message element does not have a valid format type");
        throw error;
      }
    } else {
      const id = format.id;
      const obj14 = Object.create(StringFormat.prototype);
      obj14.id = id;
      return obj14;
    }
  }
  compileOptions(format) {
    let num;
    const self = this;
    format = format.format;
    const options = format.options;
    const pluralStack = this.pluralStack;
    pluralStack.push(this.currentPlural);
    let tmp2 = null;
    if ("pluralFormat" === format.type) {
      tmp2 = format;
    }
    const obj = {};
    self.currentPlural = tmp2;
    const length = options.length;
    for (let num = 0; num < length; num = num + 1) {
      let iter = options[num];
      obj[iter.selector] = self.compileMessage(iter.value);
    }
    const pluralStack1 = self.pluralStack;
    self.currentPlural = pluralStack1.pop();
    return obj;
  }
}
class StringFormat {
  constructor(id) {
    this.id = id;
  }
  format(str) {
    str = "";
    if (str) {
      let StringResult = str;
      if (typeof str !== "string") {
        const _String = String;
        StringResult = String(str);
      }
      str = StringResult;
    }
    return str;
  }
}
class PluralFormat {
  constructor(arg0, arg1, arg2, arg3, arg4) {}
  getOption(arg0) {
    const self = this;
    const options = this.options;
    const tmp =
      options["=" + arg0] || options[self.pluralFn(self, arg0 - self.offset, self.useOrdinal)] || options.other;
    return tmp;
  }
}
class PluralOffsetString {
  constructor(arg0, arg1, arg2, arg3) {}
  format(arg0) {
    const numberFormat = this.numberFormat;
    const str = this.string;
    const str2 = str.replace(/(^|[^\\])#/g, `$1${numberFormat.format(arg0 - this.offset)}`);
    return str2.replace(/\\#/g, "#");
  }
}
class SelectFormat {
  constructor(arg0, arg1) {}
  getOption(arg0) {
    const options = this.options;
    return options[arg0] || options.other;
  }
}

export default Compiler;
