// === Module 7343: createDefaultFieldsSection ===

// Module 7343 (createDefaultFieldsSection)
import isUndefinedOrNullDefault from "isUndefinedOrNull" /* 659 */;
import DismissibleContent from "DismissibleContent" /* 1373 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1471 */;
import isPremiumAtLeast from "isPremiumAtLeast" /* 1946 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4268 */;
import WidgetType from "WidgetType" /* 7335 */;
import PersonalWidgetSectionType from "PersonalWidgetSectionType" /* 7344 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

require = arg1;
function createDefaultFieldsSection() {
  let obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS, fields: items };
  obj = { key: `field-${tmp}`, title: "", description: "" };
  const sum = tmp + 1;
  closure_5 = sum;
  items = [obj, , , ];
  obj = { key: `field-${tmp3}`, title: "", description: "" };
  const sum1 = tmp3 + 1;
  closure_5 = sum1;
  items[1] = obj;
  const sum2 = tmp5 + 1;
  closure_5 = sum2;
  items[2] = { key: `field-${+sum1}`, title: "", description: "" };
  closure_5 = tmp7 + 1;
  items[3] = { key: `field-${+sum2}`, title: "", description: "" };
  return obj;
}
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
  if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
    let tmp4 = "" === type.title.trim();
    if (tmp4) {
      tmp4 = "" === type.subtitle.trim();
      const str3 = type.subtitle;
    }
    if (tmp4) {
      tmp4 = null == type.image;
    }
    return tmp4;
  } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
    const fields = type.fields;
    return fields.every(isFieldEmpty);
  }
  const tmp = require;
}
function parseField(image) {
  image = image.image;
  let tmp;
  if (null != image) {
    if ("file_id" in image) {
      let obj = { fileId: null, width: null, height: null, isAnimated: null };
      ({ file_id: obj[0], width: obj[1], height: obj[2], is_animated } = image);
      if (is_animated == null) {
        is_animated = false;
      }
      obj[3] = is_animated;
      tmp = obj;
    }
  }
  obj = { key: `field-${tmp2}`, title: null, description: null, image: null, hideImage: null };
  closure_5 = tmp2 + 1;
  let str2 = image.title;
  if (str2 == null) {
    str2 = "";
  }
  obj[1] = str2;
  let str3 = image.description;
  if (str3 == null) {
    str3 = "";
  }
  obj[2] = str3;
  obj[3] = tmp;
  obj[4] = null == tmp || undefined;
  return obj;
}
function serializeSection(type) {
  type = type.type;
  if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
    let obj = { type: null, title: null, subtitle: null, image: null };
    ({ type: obj2[0], title: obj2[1], subtitle: obj2[2], image } = type);
    if (null == image) {
      obj[3] = undefined;
      return obj;
    } else if ("localDataUri" in image) {
      obj = { filename: null };
      image = image.filename;
      obj[0] = image;
      obj1 = obj;
    } else {
      obj1 = { file_id: null, width: null, height: null, is_animated: null };
      ({ fileId: obj3[0], width: obj3[1], height: obj3[2], isAnimated: obj3[3] } = image);
    }
  } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
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
        obj = { file_id: null, width: null, height: null, is_animated: null };
        ({ fileId: obj2[0], width: obj2[1], height: obj2[2], isAnimated: obj2[3] } = filename);
      }
    });
    return obj;
  } else {
    return type;
  }
}
let c5 = 0;
let UserProfilePersonalWidget;
class UserProfilePersonalWidget {
  constructor(arg0) {
    sections = global.sections;
    ({ id, header } = global);
    obj = Object.create(new.target.prototype);
    obj.id = id;
    obj.type = require("WidgetType").WidgetType.PERSONAL;
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
  const found = sections.filter((type) => {
    type = type.type;
    if (callback(table[2]).PersonalWidgetSectionType.COVER === type) {
      let tmp5 = "" === type.title.trim();
      if (tmp5) {
        tmp5 = "" === type.subtitle.trim();
        const str3 = type.subtitle;
      }
      if (tmp5) {
        tmp5 = null == type.image;
      }
      let everyResult = tmp5;
      const str = type.title;
    } else if (callback(table[2]).PersonalWidgetSectionType.FIELDS === type) {
      const fields = type.fields;
      everyResult = fields.every(closure_7);
    }
    return !everyResult;
  });
  const mapped = found.map(serializeSection);
  obj[2] = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  obj[1] = obj;
  return obj;
};
prototype["isDiscardable"] = function isDiscardable() {
  const sections = this.sections;
  return sections.every(isSectionEmpty);
};
prototype["isValid"] = function isValid() {
  let someResult = "" !== this.header.trim();
  if (someResult) {
    const sections = this.sections;
    someResult = sections.some((type) => {
      type = type.type;
      if (callback(table[2]).PersonalWidgetSectionType.COVER === type) {
        let tmp5 = "" === type.title.trim();
        if (tmp5) {
          tmp5 = "" === type.subtitle.trim();
          const str3 = type.subtitle;
        }
        if (tmp5) {
          tmp5 = null == type.image;
        }
        let everyResult = tmp5;
        const str = type.title;
      } else if (callback(table[2]).PersonalWidgetSectionType.FIELDS === type) {
        const fields = type.fields;
        everyResult = fields.every(closure_7);
      }
      return !everyResult;
    });
  }
  return someResult;
};
prototype["isUpdatable"] = function isUpdatable() {
  return isPremiumAtLeast.isPremium(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
};
prototype["isEqual"] = function isEqual(header) {
  let tmp = header instanceof UserProfilePersonalWidget;
  if (tmp) {
    if (this.header !== header.header) {
      tmp = tmp3;
    } else {
      const sections = tmp2.sections;
      const sections1 = header.sections;
      let image = sections.length;
      let flag = false;
      if (image === sections1.length) {
        let num2 = 0;
        flag = true;
        let image2 = sections[num2];
        image = sections1[num2];
        let sum = num2;
        flag = false;
        if (image2.type === image.type) {
          const type = image2.type;
          if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
            let tmp13 = image2.title === image.title && image2.subtitle === image.subtitle;
            if (tmp13) {
              image2 = image2.image;
              image = image.image;
              tmp13 = isUndefinedOrNullDefault(image2, image);
            }
            flag = false;
            sum = sum + 1;
            num2 = sum;
            flag = true;
          } else if (tmp16(7344).PersonalWidgetSectionType.FIELDS !== type) {
            flag = false;
          }
          tmp16 = require;
        }
        let flag2 = false;
        if (image2.fields.length === image.fields.length) {
          let num = 0;
          flag2 = true;
          if (0 < image2.fields.length) {
            while (true) {
              let tmp6 = image2.fields[num];
              let tmp7 = image.fields[num];
              let tmp8 = tmp6.title === tmp7.title;
              let tmp9 = num;
              if (tmp8) {
                tmp8 = tmp6.description === tmp7.description;
              }
              if (tmp8) {
                let tmp10 = importDefault;
                let tmp11 = dependencyMap;
                tmp8 = isUndefinedOrNullDefault(tmp6.image, tmp7.image);
              }
              flag2 = false;
              if (!tmp8) {
                break;
              } else {
                let sum1 = num + 1;
                num = sum1;
                flag2 = true;
                if (sum1 >= image2.fields.length) {
                  break;
                }
              }
            }
          }
        }
        flag = false;
      }
    }
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
const result = require("set").fileFinishedImporting("modules/user_profile/UserProfilePersonalWidget.tsx");

export const createDefaultCoverSection = function createDefaultCoverSection() {
  return { type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
};
export const createDefaultField = function createDefaultField() {
  closure_5 = tmp + 1;
  return { key: `field-${+closure_5}`, title: "", description: "" };
};
export { createDefaultFieldsSection };
export const createDefaultPersonalWidget = function createDefaultPersonalWidget() {
  let obj = { header: "", sections: null };
  obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
  const items = [obj, createDefaultFieldsSection()];
  obj[1] = items;
  if (typeof UserProfilePersonalWidget !== "function") {
    HermesBuiltin.throwTypeError();
  }
  ({ sections, id, header } = obj);
  obj = Object.create(UserProfilePersonalWidget.prototype);
  obj.id = id;
  obj.type = WidgetType.WidgetType.PERSONAL;
  obj.header = header;
  if (sections == null) {
    sections = [];
  }
  obj.sections = sections;
  return obj;
};
export const isPersonalWidgetNew = function isPersonalWidgetNew() {
  return !UNSAFE_isDismissibleContentDismissed.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE);
};
export const parsePersonalWidgetSections = function parsePersonalWidgetSections(sections) {
  if (null == sections) {
    let items = [];
  } else {
    const mapped = sections.map((type) => {
      type = type.type;
      if (callback(7344).PersonalWidgetSectionType.COVER === type) {
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
            obj = { fileId: null, width: null, height: null, isAnimated: null };
            ({ file_id: obj3[0], width: obj3[1], height: obj3[2], is_animated } = image);
            if (is_animated == null) {
              is_animated = false;
            }
            obj[3] = is_animated;
            tmp5 = obj;
          }
        }
        obj[3] = tmp5;
        return obj;
      } else if (tmp(7344).PersonalWidgetSectionType.FIELDS === type) {
        obj = { type: null, fields: null };
        ({ type: obj[0], fields } = type);
        obj[1] = fields.map(closure_9);
        return obj;
      }
      tmp = callback;
    });
    items = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  }
  if (!items.some((type) => type.type === callback(7344).PersonalWidgetSectionType.FIELDS)) {
    let obj = { type: null, fields: null };
    obj[0] = PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS;
    obj[1] = [];
    items.push(obj);
  }
  return items;
};
export { UserProfilePersonalWidget };