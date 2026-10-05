// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import SettingsConstants from "../../user_settings/core/native/SettingsConstants.tsx";
import SettingBuilders from "../../settings/native/renderer/SettingBuilders.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let dliU4j;
      let format;
      let intl2;
      let intl3;
      let items;
      let items1;
      let items2;
      let items3;
      let obj4;
      let obj5;
      let tmp10;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { sections: items1 };
        const obj3 = { settings: items, subLabel: format(dliU4j, obj4) };
        items = [MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
        const createList = SettingBuilders.createList;
        SettingBuilders;
        const intl = intl4.intl;
        format = intl.format;
        obj4 = { learnMoreLink: obj5.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION) };
        dliU4j = intl4.t.dliU4j;
        items1 = [obj3, ,];
        obj5 = HelpdeskUtilsDefault;
        const obj6 = { label: intl2.string(intl4.t.MeYuqs), settings: items2 };
        intl2 = intl4.intl;
        items2 = [,];
        ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } =
          MobileUserSettings);
        items1[1] = obj6;
        const obj7 = { label: intl3.string(intl4.t.XlGG9c), settings: items3 };
        intl3 = intl4.intl;
        items3 = [, ,];
        ({
          PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0],
          PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1],
          PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2],
        } = MobileUserSettings);
        items1[2] = obj7;
        const list = createList(obj2);
        cResult[0] = list;
        let first = list;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = <View>{null}</View>;
        cResult[1] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[1];
      }
      return tmp10;
    }
  : () => {
      let dliU4j;
      let format;
      let intl2;
      let intl3;
      let items;
      let items1;
      let items2;
      let items3;
      let obj3;
      let obj4;
      const obj = { sections: items1 };
      const obj2 = { settings: items, subLabel: format(dliU4j, obj3) };
      items = [MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
      const createList = SettingBuilders.createList;
      SettingBuilders;
      const intl = intl4.intl;
      format = intl.format;
      obj3 = { learnMoreLink: obj4.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION) };
      dliU4j = intl4.t.dliU4j;
      items1 = [obj2, ,];
      obj4 = HelpdeskUtilsDefault;
      const obj5 = { label: intl2.string(intl4.t.MeYuqs), settings: items2 };
      intl2 = intl4.intl;
      items2 = [,];
      ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } =
        MobileUserSettings);
      items1[1] = obj5;
      const obj6 = { label: intl3.string(intl4.t.XlGG9c), settings: items3 };
      intl3 = intl4.intl;
      items3 = [, ,];
      ({
        PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0],
        PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1],
        PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2],
      } = MobileUserSettings);
      items1[2] = obj6;
      const list = createList(obj);
      return <View>{null}</View>;
    };
const result = size.fileFinishedImporting(
  "modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx",
);

export default tmp3;
