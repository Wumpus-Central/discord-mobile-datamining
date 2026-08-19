// discord_app/modules/user_profile/UserProfilePersonalWidget.tsx
import isUndefinedOrNullDefault from "../../../_runtime/00659_isUndefinedOrNull.js";
import getSystemLocale from "../../intl/index.native.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import isPremiumAtLeast from "../../utils/PremiumTypeUtils.tsx";
import WidgetType from "../../../discord_common/js/shared/shared-constants/WidgetType.tsx";
import PersonalWidgetSectionType from "../../../discord_common/js/shared/shared-constants/PersonalWidgetSectionType.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";

require = fn;
function isFieldEmpty(title) {
  let tmp = "" === title.title.trim();
  if (tmp) {
    tmp = "" === title.description.trim();
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
    }
    if (tmp4) {
      tmp4 = null == type.image;
    }
    return tmp4;
  } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
    const fields = type.fields;
    return fields.every(isFieldEmpty);
  }
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
    } else {
      ({ fileId: obj3[0], width: obj3[1], height: obj3[2], isAnimated: obj3[3] } = image);
    }
  } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
    const fields = type.fields;
    const found = fields.filter((item, index) => {
      let tmp = "" === item.title.trim();
      if (tmp) {
        tmp = "" === item.description.trim();
      }
      if (tmp) {
        tmp = null == item.image;
      }
      return !tmp;
    });
    obj = { type: null, fields: null };
    obj[0] = type.type;
    obj[1] = found.map((item, index) => {
      let obj = { title: item.title, description: item.description, image: null };
      let filename = item.image;
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
  const obj = { type: this.type, header: this.header, sections: null };
  const sections = this.sections;
  const found = sections.filter((item, index) => {
    const type = item.type;
    if (callback(table[2]).PersonalWidgetSectionType.COVER === type) {
      let tmp5 = "" === item.title.trim();
      if (tmp5) {
        tmp5 = "" === item.subtitle.trim();
      }
      if (tmp5) {
        tmp5 = null == item.image;
      }
      let everyResult = tmp5;
    } else if (callback(table[2]).PersonalWidgetSectionType.FIELDS === type) {
      const fields = item.fields;
      everyResult = fields.every(closure_6);
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
  const sections = this.sections;
  return sections.some((item, index) => {
    const type = item.type;
    if (callback(table[2]).PersonalWidgetSectionType.COVER === type) {
      let tmp5 = "" === item.title.trim();
      if (tmp5) {
        tmp5 = "" === item.subtitle.trim();
      }
      if (tmp5) {
        tmp5 = null == item.image;
      }
      let everyResult = tmp5;
    } else if (callback(table[2]).PersonalWidgetSectionType.FIELDS === type) {
      const fields = item.fields;
      everyResult = fields.every(closure_6);
    }
    return !everyResult;
  });
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
            sum = sum + 1;
            num2 = sum;
            flag = true;
          } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS !== type) {
            flag = false;
          }
        }
        if (image2.fields.length === image.fields.length) {
          let num = 0;
          if (0 < image2.fields.length) {
            while (true) {
              let tmp6 = image2.fields[num];
              let tmp7 = image.fields[num];
              let tmp8 = tmp6.title === tmp7.title;
              if (tmp8) {
                tmp8 = tmp6.description === tmp7.description;
              }
              if (tmp8) {
                tmp8 = isUndefinedOrNullDefault(tmp6.image, tmp7.image);
              }
              let flag2 = false;
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
const result = require("obj132").fileFinishedImporting("modules/user_profile/UserProfilePersonalWidget.tsx");

export const createDefaultCoverSection = function createDefaultCoverSection() {
  return { type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
};
export const createDefaultField = function createDefaultField() {
  closure_5 = tmp + 1;
  return { key: `field-${+closure_5}`, title: "", description: "" };
};
export const createDefaultFieldsSection = function createDefaultFieldsSection() {
  const obj = { key: `field-${tmp}`, title: "", description: "" };
  closure_5 = tmp + 1;
  const items = [obj];
  return obj;
};
export const createDefaultPersonalWidget = function createDefaultPersonalWidget() {
  let obj = { header: null, sections: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.QxKl9A);
  obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
  const items = [obj, ];
  obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS, fields: items1 };
  closure_5 = tmp4 + 1;
  items1 = [{ key: `field-${+closure_5}`, title: "", description: "" }];
  items[1] = obj;
  obj[1] = items;
  if (typeof UserProfilePersonalWidget !== "function") {
    HermesBuiltin.throwTypeError();
  }
  ({ header, sections, id } = obj);
  const obj2 = Object.create(UserProfilePersonalWidget.prototype);
  obj2.id = id;
  obj2.type = WidgetType.WidgetType.PERSONAL;
  if (header == null) {
    header = "";
  }
  obj2.header = header;
  if (sections == null) {
    sections = [];
  }
  obj2.sections = sections;
  return obj2;
};
export const parsePersonalWidgetSections = function parsePersonalWidgetSections(sections) {
  if (null == sections) {
    let items = [];
  } else {
    const mapped = sections.map((item, index) => {
      const type = item.type;
      if (callback(5376).PersonalWidgetSectionType.COVER === type) {
        let obj = { type: null, title: null, subtitle: null, image: null };
        ({ type: obj2[0], title } = item);
        if (title == null) {
          title = "";
        }
        obj[1] = title;
        let str = item.subtitle;
        if (str == null) {
          str = "";
        }
        obj[2] = str;
        const image = item.image;
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
      } else if (callback(5376).PersonalWidgetSectionType.FIELDS === type) {
        obj = { type: null, fields: null };
        ({ type: obj[0], fields } = item);
        obj[1] = fields.map(closure_8);
        return obj;
      }
    });
    items = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  }
  if (!items.some((item, index) => item.type === callback(5376).PersonalWidgetSectionType.FIELDS)) {
    let obj = { type: null, fields: null };
    obj[0] = PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS;
    obj[1] = [];
    items.push(obj);
  }
  return items;
};
export { UserProfilePersonalWidget };