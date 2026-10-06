// === Module 7129: UserProfilePersonalWidget ===

// Module 7129 (UserProfilePersonalWidget)
import _modDef1342 from "module_1342" /* 1342 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4704 */;
import WidgetType from "WidgetType" /* 7125 */;
import PersonalWidgetSectionType from "PersonalWidgetSectionType" /* 7130 */;
import UserStore from "UserStore" /* 1377 */;
import size_mod from "module_2" /* 2 */;

function createDefaultFieldsSection() {
  let items;
  const sum = tmp + 1;
  const obj2 = { key: `field-${+closure_5}`, title: "", description: "" };
  const obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS, fields: items };
  items = [obj2, , , ];
  const sum1 = tmp3 + 1;
  const obj3 = { key: `field-${+sum}`, title: "", description: "" };
  items[1] = obj3;
  const sum2 = tmp5 + 1;
  const obj4 = { key: `field-${+sum1}`, title: "", description: "" };
  items[2] = obj4;
  closure_5 = tmp7 + 1;
  const obj5 = { key: `field-${+sum2}`, title: "", description: "" };
  items[3] = obj5;
  return obj;
}
function isFieldEmpty(title) {
  const str = title.title;
  let tmp = "" === str.trim();
  if (tmp) {
    const str2 = title.description;
    tmp = "" === str2.trim();
  }
  if (tmp) {
    tmp = null == title.image;
  }
  return tmp;
}
function isSectionEmpty(type) {
  type = type.type;
  if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
    const str = type.title;
    let tmp4 = "" === str.trim();
    if (tmp4) {
      const str3 = type.subtitle;
      tmp4 = "" === str3.trim();
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
  let is_animated;
  let str2;
  let str3;
  image = image.image;
  let tmp;
  if (null != image) {
    if ("file_id" in image) {
      size = { fileId: null, width: null, height: null, isAnimated: is_animated };
      ({ file_id: obj.fileId, width: obj.width, height: obj.height, is_animated } = image);
      if (is_animated == null) {
        is_animated = false;
      }
      tmp = size;
    }
  }
  const obj2 = { key: `field-${+closure_5}`, title: str2, description: str3, image: tmp, hideImage: null == tmp || undefined };
  closure_5 = tmp2 + 1;
  str2 = image.title;
  if (str2 == null) {
    str2 = "";
  }
  str3 = image.description;
  if (str3 == null) {
    str3 = "";
  }
  return obj2;
}
function serializeSection(type) {
  let image;
  let tmp4;
  type = type.type;
  if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
    const obj6 = { type: null, title: null, subtitle: null, image: tmp4 };
    ({ type: obj2.type, title: obj2.title, subtitle: obj2.subtitle, image } = type);
    tmp4 = undefined;
    if (null != image) {
      let str = "localDataUri";
      if ("localDataUri" in image) {
        const obj7 = { filename: null, original_hash: null };
        ({ filename: obj4.filename, originalHash: obj4.original_hash } = image);
        size = obj7;
      } else {
        size = { file_id: null, width: null, height: null, is_animated: null };
        ({ fileId: obj3.file_id, width: obj3.width, height: obj3.height, isAnimated: obj3.is_animated } = image);
      }
      tmp4 = size;
    }
    return obj6;
  } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
    const fields = type.fields;
    const found = fields.filter((title) => {
      const str = title.title;
      let tmp = "" === str.trim();
      if (tmp) {
        const str2 = title.description;
        tmp = "" === str2.trim();
      }
      if (tmp) {
        tmp = null == title.image;
      }
      return !tmp;
    });
    let obj = {
      type: type.type,
      fields: found.map((title) => {
          let tmp;
          const image = title.image;
          const obj = { title: title.title, description: title.description, image: tmp };
          tmp = undefined;
          if (null != image) {
            if ("localDataUri" in image) {
              const obj4 = { filename: null, original_hash: null };
              ({ filename: obj3.filename, originalHash: obj3.original_hash } = image);
              size = obj4;
            } else {
              size = { file_id: null, width: null, height: null, is_animated: null };
              ({ fileId: obj2.file_id, width: obj2.width, height: obj2.height, isAnimated: obj2.is_animated } = image);
            }
            tmp = size;
          }
          return obj;
        })
    };
    return obj;
  } else {
    return type;
  }
}
const PremiumTypes = PremiumConstants.PremiumTypes;
let closure_5 = 0;
class UserProfilePersonalWidget {
  constructor(sections) {
    let header;
    let id;
    sections = sections.sections;
    ({ id, header } = sections);
    const obj = Object.create(new.target.prototype);
    obj.id = id;
    obj.type = WidgetType.WidgetType.PERSONAL;
    obj.header = header;
    if (sections == null) {
      sections = [];
    }
    obj.sections = sections;
    return obj;
  }
  toSubmission() {
    let mapped;
    let obj2;
    const obj = { id: this.id, data: obj2 };
    const sections = this.sections;
    obj2 = { type: this.type, header: this.header, sections: mapped.filter(GlobalUtils.isNotNullish) };
    const found = sections.filter((type) => {
      let everyResult;
      type = type.type;
      if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
        const str = type.title;
        let tmp5 = "" === str.trim();
        if (tmp5) {
          const str3 = type.subtitle;
          tmp5 = "" === str3.trim();
        }
        if (tmp5) {
          tmp5 = null == type.image;
        }
        everyResult = tmp5;
      } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
        const fields = type.fields;
        everyResult = fields.every(isFieldEmpty);
      }
      return !everyResult;
    });
    mapped = found.map(serializeSection);
    return obj;
  }
  isDiscardable() {
    const sections = this.sections;
    return sections.every(isSectionEmpty);
  }
  isValid() {
    let str = this.header;
    let someResult = "" !== str.trim();
    if (someResult) {
      const sections = this.sections;
      someResult = sections.some((type) => {
        let everyResult;
        type = type.type;
        if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
          const str = type.title;
          let tmp5 = "" === str.trim();
          if (tmp5) {
            const str3 = type.subtitle;
            tmp5 = "" === str3.trim();
          }
          if (tmp5) {
            tmp5 = null == type.image;
          }
          everyResult = tmp5;
        } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
          const fields = type.fields;
          everyResult = fields.every(isFieldEmpty);
        }
        return !everyResult;
      });
    }
    return someResult;
  }
  isUpdatable() {
    const obj = PremiumTypeUtils;
    return obj.isPremium(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  }
  isEqual(header) {
    let tmp = header instanceof UserProfilePersonalWidget;
    if (tmp) {
      let tmp2 = this.header === header.header;
      if (tmp2) {
        const sections = this.sections;
        const sections1 = header.sections;
        let flag = false;
        if (sections.length === sections1.length) {
          let num2 = 0;
          flag = true;
          if (0 < sections.length) {
            flag = false;
            while (sections[num2].type === sections1[num2].type) {
              let type = tmp3.type;
              if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
                let tmp14 = tmp3.title === tmp4.title && tmp3.subtitle === tmp4.subtitle && _modDef1342(tmp3.image, tmp4.image);
                flag = false;
                if (!tmp14) {
                  break;
                }
              } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
                let flag2 = false;
                if (tmp3.fields.length === tmp4.fields.length) {
                  let num = 0;
                  flag2 = true;
                  if (0 < tmp3.fields.length) {
                    while (true) {
                      let tmp7 = tmp3.fields[num];
                      let tmp8 = tmp4.fields[num];
                      let tmp9 = tmp7.title === tmp8.title;
                      if (tmp9) {
                        tmp9 = tmp7.description === tmp8.description;
                      }
                      if (tmp9) {
                        tmp9 = _modDef1342(tmp7.image, tmp8.image);
                      }
                      flag2 = false;
                      if (!tmp9) {
                        break;
                      } else {
                        let sum = num + 1;
                        num = sum;
                        flag2 = true;
                        if (sum >= tmp3.fields.length) {
                          break;
                        }
                      }
                    }
                  }
                }
                flag = false;
                if (!flag2) {
                  break;
                }
                break;
              } else {
                flag = false;
                if (!_modDef1342(tmp3, tmp4)) {
                  break;
                }
                break;
              }
              let sum1 = num2 + 1;
              num2 = sum1;
              flag = true;
              if (sum1 >= sections.length) {
                break;
              }
            }
          }
        }
        tmp2 = flag;
      }
      tmp = tmp2;
    }
    return tmp;
  }
  getUniqueKey() {
    return this.type;
  }
  getProfileAnalyticsOptions() {
    return { widgetType: this.type };
  }
  getProfileEditAnalyticsOptions() {
    return { widgetEdited: this.type };
  }
}
const prototype = UserProfilePersonalWidget.prototype;
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/UserProfilePersonalWidget.tsx");

export const createDefaultCoverSection = function createDefaultCoverSection() {
  const obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
  return obj;
};
export const createDefaultField = function createDefaultField() {
  const obj = { key: `field-${+closure_5}`, title: "", description: "" };
  closure_5 = tmp + 1;
  return obj;
};
export { createDefaultFieldsSection };
export const createDefaultPersonalWidget = function createDefaultPersonalWidget() {
  let header;
  let id;
  let items;
  let sections;
  const obj = { header: "", sections: items };
  items = [{ type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" }, ];
  ({ type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" });
  items[1] = createDefaultFieldsSection();
  if (typeof UserProfilePersonalWidget === "function") {
    ({ sections, id, header } = obj);
    const obj4 = Object.create(UserProfilePersonalWidget.prototype);
    obj4.id = id;
    obj4.type = WidgetType.WidgetType.PERSONAL;
    obj4.header = header;
    if (sections == null) {
      sections = [];
    }
    obj4.sections = sections;
    return obj4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const isPersonalWidgetNew = function isPersonalWidgetNew() {
  const obj = DismissibleContentUnsafeUtils;
  return !obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE);
};
export const parsePersonalWidgetSections = function parsePersonalWidgetSections(sections) {
  let items;
  if (null == sections) {
    items = [];
  } else {
    const mapped = sections.map((type) => {
      let fields;
      let is_animated;
      let str;
      let title;
      let tmp5;
      type = type.type;
      if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
        const obj4 = { type: null, title, subtitle: str, image: tmp5 };
        ({ type: obj2.type, title } = type);
        if (title == null) {
          title = "";
        }
        str = type.subtitle;
        if (str == null) {
          str = "";
        }
        const image = type.image;
        tmp5 = undefined;
        if (null != image) {
          if ("file_id" in image) {
            size = { fileId: null, width: null, height: null, isAnimated: is_animated };
            ({ file_id: obj3.fileId, width: obj3.width, height: obj3.height, is_animated } = image);
            if (is_animated == null) {
              is_animated = false;
            }
            tmp5 = size;
          }
        }
        return obj4;
      } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
        const obj = { type: null, fields: fields.map(parseField) };
        ({ type: obj.type, fields } = type);
        return obj;
      }
    });
    items = mapped.filter(GlobalUtils.isNotNullish);
  }
  if (!items.some((type) => type.type === PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS)) {
    let obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS, fields: [] };
    const push = items.push;
    push(obj);
  }
  return items;
};
export { UserProfilePersonalWidget };