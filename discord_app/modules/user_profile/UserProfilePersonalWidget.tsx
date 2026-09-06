// discord_app/modules/user_profile/UserProfilePersonalWidget.tsx
import _modDef1332 from "../../../_runtime/metro/01332__.js";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import WidgetType from "../../../discord_common/js/shared/shared-constants/WidgetType.tsx";
import PersonalWidgetSectionType from "../../../discord_common/js/shared/shared-constants/PersonalWidgetSectionType.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function createDefaultFieldsSection() {
  let obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS, fields: null };
  obj = { key: null, title: "", description: "" };
  const sum = tmp + 1;
  closure_5 = sum;
  obj.key = `field-${+closure_5}`;
  const items = [obj, , ,];
  obj = { key: `field-${+sum}`, title: "", description: "" };
  const sum1 = tmp3 + 1;
  items[1] = obj;
  const obj1 = { key: `field-${+sum1}`, title: "", description: "" };
  const sum2 = tmp5 + 1;
  items[2] = obj1;
  const obj2 = { key: `field-${+sum2}`, title: "", description: "" };
  closure_5 = tmp7 + 1;
  items[3] = obj2;
  obj.fields = items;
  return obj;
}
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
      const size = { fileId: null, width: null, height: null, isAnimated: null };
      ({ file_id: obj.fileId, width: obj.width, height: obj.height, is_animated } = image);
      if (is_animated == null) {
        is_animated = false;
      }
      size.isAnimated = is_animated;
      tmp = size;
    }
  }
  const obj = { key: null, title: null, description: null, image: null, hideImage: null };
  closure_5 = tmp2 + 1;
  obj.key = `field-${+closure_5}`;
  let str2 = image.title;
  if (str2 == null) {
    str2 = "";
  }
  obj.title = str2;
  let str3 = image.description;
  if (str3 == null) {
    str3 = "";
  }
  obj.description = str3;
  obj.image = tmp;
  obj.hideImage = null == tmp || undefined;
  return obj;
}
function serializeSection(type) {
  type = type.type;
  if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
    let obj = { type: null, title: null, subtitle: null, image: null };
    ({ type: obj2.type, title: obj2.title, subtitle: obj2.subtitle, image } = type);
    if (null == image) {
      obj.image = undefined;
      return obj;
    } else if ("localDataUri" in image) {
      obj = { filename: null };
      image = image.filename;
      obj.filename = image;
      let size = obj;
    } else {
      size = { file_id: null, width: null, height: null, is_animated: null };
      ({ fileId: obj3.file_id, width: obj3.width, height: obj3.height, isAnimated: obj3.is_animated } = image);
    }
  } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
    const fields = type.fields;
    const found = fields.filter((title) => {
      let tmp = "" === title.title.trim();
      if (tmp) {
        tmp = "" === title.description.trim();
      }
      if (tmp) {
        tmp = null == title.image;
      }
      return !tmp;
    });
    obj = {
      type: type.type,
      fields: found.map((title) => {
        let obj = { title: title.title, description: title.description, image: null };
        let filename = title.image;
        if (null == filename) {
          obj.image = undefined;
          return obj;
        } else if ("localDataUri" in filename) {
          obj = { filename: null };
          filename = filename.filename;
          obj.filename = filename;
          let size = obj;
        } else {
          size = { file_id: null, width: null, height: null, is_animated: null };
          ({ fileId: obj2.file_id, width: obj2.width, height: obj2.height, isAnimated: obj2.is_animated } = filename);
        }
      }),
    };
    return obj;
  } else {
    return type;
  }
}
const PremiumTypes = fn(1373).PremiumTypes;
let closure_5 = 0;
let UserProfilePersonalWidget;
class UserProfilePersonalWidget {
  constructor(arg0) {
    sections = global.sections;
    ({ id, header } = global);
    obj = Object.create(new.target.prototype);
    obj.id = id;
    obj.type = closure_0(closure_2[7]).WidgetType.PERSONAL;
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
    if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
      let tmp5 = "" === type.title.trim();
      if (tmp5) {
        tmp5 = "" === type.subtitle.trim();
      }
      if (tmp5) {
        tmp5 = null == type.image;
      }
      let everyResult = tmp5;
    } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
      const fields = type.fields;
      everyResult = fields.every(isFieldEmpty);
    }
    return !everyResult;
  });
  const mapped = found.map(serializeSection);
  obj.sections = mapped.filter(GlobalUtils.isNotNullish);
  obj.data = obj;
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
      if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
        let tmp5 = "" === type.title.trim();
        if (tmp5) {
          tmp5 = "" === type.subtitle.trim();
        }
        if (tmp5) {
          tmp5 = null == type.image;
        }
        let everyResult = tmp5;
      } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
        const fields = type.fields;
        everyResult = fields.every(isFieldEmpty);
      }
      return !everyResult;
    });
  }
  return someResult;
};
prototype["isUpdatable"] = function isUpdatable() {
  return PremiumTypeUtils.isPremium(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
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
              tmp13 = _modDef1332(image2, image);
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
                tmp8 = _modDef1332(tmp6.image, tmp7.image);
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
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/UserProfilePersonalWidget.tsx");

export const createDefaultCoverSection = function createDefaultCoverSection() {
  return { type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
};
export const createDefaultField = function createDefaultField() {
  const obj = { key: null, title: "", description: "" };
  closure_5 = tmp + 1;
  obj.key = `field-${+closure_5}`;
  return obj;
};
export { createDefaultFieldsSection };
export const createDefaultPersonalWidget = function createDefaultPersonalWidget() {
  let obj = { header: "", sections: null };
  obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.COVER, title: "", subtitle: "" };
  const items = [obj, createDefaultFieldsSection()];
  obj.sections = items;
  if (typeof UserProfilePersonalWidget === "function") {
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
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const isPersonalWidgetNew = function isPersonalWidgetNew() {
  return !DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(
    dismissible_content.DismissibleContent.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE,
  );
};
export const parsePersonalWidgetSections = function parsePersonalWidgetSections(sections) {
  if (null == sections) {
    let items = [];
  } else {
    const mapped = sections.map((type) => {
      type = type.type;
      if (PersonalWidgetSectionType.PersonalWidgetSectionType.COVER === type) {
        let obj = { type: null, title: null, subtitle: null, image: null };
        ({ type: obj2.type, title } = type);
        if (title == null) {
          title = "";
        }
        obj.title = title;
        let str = type.subtitle;
        if (str == null) {
          str = "";
        }
        obj.subtitle = str;
        const image = type.image;
        let tmp5;
        if (null != image) {
          if ("file_id" in image) {
            const size = { fileId: null, width: null, height: null, isAnimated: null };
            ({ file_id: obj3.fileId, width: obj3.width, height: obj3.height, is_animated } = image);
            if (is_animated == null) {
              is_animated = false;
            }
            size.isAnimated = is_animated;
            tmp5 = size;
          }
        }
        obj.image = tmp5;
        return obj;
      } else if (PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS === type) {
        obj = { type: null, fields: null };
        ({ type: obj.type, fields } = type);
        obj.fields = fields.map(parseField);
        return obj;
      }
    });
    items = mapped.filter(GlobalUtils.isNotNullish);
  }
  if (!items.some((type) => type.type === PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS)) {
    let obj = { type: PersonalWidgetSectionType.PersonalWidgetSectionType.FIELDS, fields: [] };
    items.push(obj);
  }
  return items;
};
export { UserProfilePersonalWidget };
