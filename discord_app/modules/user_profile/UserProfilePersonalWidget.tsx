function isFieldEmpty(title) {
  let tmp = "" === title.title.trim();
  if (tmp) {
    tmp = "" === title.description.trim();
    const str2 = title.description;
  }
  if (tmp) {
    tmp = null == title.image;
  }
  return tmp;
}
function isSectionEmpty(type) {
  type = type.type;
  if (require(5908) /* PersonalWidgetSectionType */.PersonalWidgetSectionType.COVER === type) {
    let tmp4 = "" === type.title.trim();
    if (tmp4) {
      tmp4 = "" === type.subtitle.trim();
      const str3 = type.subtitle;
    }
    if (tmp4) {
      tmp4 = null == type.image;
    }
    return tmp4;
  } else if (tmp(5908).PersonalWidgetSectionType.FIELDS === type) {
    const fields = type.fields;
    return fields.every(isFieldEmpty);
  }
  tmp = require;
}
function parseField(image) {
  image = image.image;
  let tmp;
  if (null != image) {
    if ("file_id" in image) {
      let obj = { fileId: null, width: null, height: null };
      ({ file_id: obj[0], width: obj[1], height: obj[2] } = image);
      tmp = obj;
    }
  }
  let str2 = image.title;
  if (str2 == null) {
    str2 = "";
  }
  obj = { title: str2, description: null, image: null, hideImage: null };
  let str3 = image.description;
  if (str3 == null) {
    str3 = "";
  }
  obj[1] = str3;
  obj[2] = tmp;
  obj[3] = null == tmp || undefined;
  return obj;
}
function serializeSection(type) {
  let image;
  type = type.type;
  if (require(5908) /* PersonalWidgetSectionType */.PersonalWidgetSectionType.COVER === type) {
    let obj = { type: null, title: null, subtitle: null, image: null };
    ({ type: obj2[0], title: obj2[1], subtitle: obj2[2], image } = type);
    if (null == image) {
      obj[3] = undefined;
      return obj;
    } else if ("localDataUri" in image) {
      obj = { filename: null };
      image = image.filename;
      obj[0] = image;
      let obj1 = obj;
    } else {
      obj1 = { file_id: null, width: null, height: null };
      ({ fileId: obj3[0], width: obj3[1], height: obj3[2] } = image);
    }
  } else if (require(5908) /* PersonalWidgetSectionType */.PersonalWidgetSectionType.FIELDS === type) {
    const fields = type.fields;
    const found = fields.filter((title) => {
      let tmp = "" === title.title.trim();
      if (tmp) {
        tmp = "" === title.description.trim();
        const str2 = title.description;
      }
      if (tmp) {
        tmp = null == title.image;
      }
      return !tmp;
    });
    obj = { type: null, fields: null };
    obj[0] = type.type;
    obj[1] = found.map((title) => {
      let obj = { title: title.title, description: title.description, image: null };
      let filename = title.image;
      if (null == filename) {
        obj[2] = undefined;
        return obj;
      } else if ("localDataUri" in filename) {
        obj = { filename: null };
        filename = filename.filename;
        obj[0] = filename;
      } else {
        obj = { file_id: null, width: null, height: null };
        ({ fileId: obj2[0], width: obj2[1], height: obj2[2] } = filename);
      }
    });
    return obj;
  } else {
    return type;
  }
}
let UserProfilePersonalWidget;
class UserProfilePersonalWidget {
  constructor(arg0) {
    ({ header, sections } = global);
    obj = Object.create(new.target.prototype);
    obj.id = global.id;
    obj.type = require("WidgetType").WidgetType.PERSONAL;
    if (header == null) {
      header = "";
    }
    obj.header = header;
    if (sections == null) {
      sections = [];
    }
    obj.sections = sections;
    return obj;
  }
}
const prototype = UserProfilePersonalWidget.prototype;
prototype["toSubmission"] = function toSubmission() {
  let obj = { id: this.id, data: null };
  obj = { type: this.type, header: this.header, sections: null };
  const sections = this.sections;
  const mapped = sections.map(serializeSection);
  obj[2] = mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
  obj[1] = obj;
  return obj;
};
prototype["isDiscardable"] = function isDiscardable() {
  let everyResult = "" === this.header.trim();
  if (everyResult) {
    const sections = this.sections;
    everyResult = sections.every(isSectionEmpty);
  }
  return everyResult;
};
prototype["isValid"] = function isValid() {
  return !this.isDiscardable();
};
prototype["isEqual"] = function isEqual(header) {
  let tmp = header instanceof UserProfilePersonalWidget;
  if (tmp) {
    const self = this;
    tmp = importDefault(659)(this.header, header.header) && importDefault(659)(self.sections, header.sections);
    const tmp2 = importDefault;
    const tmp4 = importDefault(659)(this.header, header.header) && importDefault(659)(self.sections, header.sections);
  }
  return tmp;
};
prototype["getUniqueKey"] = function getUniqueKey() {
  return this.type;
};
prototype["getProfileAnalyticsOptions"] = function getProfileAnalyticsOptions() {
  return { widgetType: this.type };
};
prototype["getProfileEditAnalyticsOptions"] = function getProfileEditAnalyticsOptions() {
  return { widgetEdited: this.type };
};
const result = require("WidgetType").fileFinishedImporting("modules/user_profile/UserProfilePersonalWidget.tsx");

export const createDefaultCoverSection = function createDefaultCoverSection() {
  return { type: require(5908) /* PersonalWidgetSectionType */.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
};
export function createDefaultField() {
  return { title: "", description: "" };
}
export const createDefaultFieldsSection = function createDefaultFieldsSection() {
  const items = [{ title: "", description: "" }];
  return { type: require(5908) /* PersonalWidgetSectionType */.PersonalWidgetSectionType.FIELDS, fields: items };
};
export const createDefaultPersonalWidget = function createDefaultPersonalWidget() {
  let header;
  let id;
  let sections;
  let obj = { sections: null };
  obj = { type: require(5908) /* PersonalWidgetSectionType */.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
  const items = [obj, ];
  obj = { type: require(5908) /* PersonalWidgetSectionType */.PersonalWidgetSectionType.FIELDS, fields: items1 };
  items1 = [{ title: "", description: "" }];
  items[1] = obj;
  obj[0] = items;
  if (typeof UserProfilePersonalWidget !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  ({ header, sections, id } = obj);
  const obj1 = Object.create(UserProfilePersonalWidget.prototype);
  obj1.id = id;
  obj1.type = require(5900) /* WidgetType */.WidgetType.PERSONAL;
  if (header == null) {
    header = "";
  }
  obj1.header = header;
  if (sections == null) {
    sections = [];
  }
  obj1.sections = sections;
  return obj1;
};
export const parsePersonalWidgetSections = function parsePersonalWidgetSections(sections) {
  if (null == sections) {
    let items = [];
  } else {
    const mapped = sections.map((type) => {
      let fields;
      let title;
      type = type.type;
      if (callback(table[0]).PersonalWidgetSectionType.COVER === type) {
        let obj = { type: null, title: null, subtitle: null, image: null };
        ({ type: obj2[0], title } = type);
        if (title == null) {
          title = "";
        }
        obj[1] = title;
        let str = type.subtitle;
        if (str == null) {
          str = "";
        }
        obj[2] = str;
        const image = type.image;
        let tmp5;
        if (null != image) {
          if ("file_id" in image) {
            obj = { fileId: null, width: null, height: null };
            ({ file_id: obj3[0], width: obj3[1], height: obj3[2] } = image);
            tmp5 = obj;
          }
        }
        obj[3] = tmp5;
        return obj;
      } else if (tmp(tmp2[0]).PersonalWidgetSectionType.FIELDS === type) {
        obj = { type: null, fields: null };
        ({ type: obj[0], fields } = type);
        obj[1] = fields.map(closure_5);
        return obj;
      }
      tmp = callback;
      tmp2 = table;
    });
    items = mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
  }
  return items;
};
export { UserProfilePersonalWidget };