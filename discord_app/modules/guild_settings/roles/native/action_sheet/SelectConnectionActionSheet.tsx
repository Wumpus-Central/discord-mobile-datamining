// === Module 16567: IdentityApplicationRow ===

// Module 16567 (IdentityApplicationRow)
import _slicedToArray from "_slicedToArray";
import TableRowGroupTitle from "TableRowGroupTitle";
import { View } from "BottomSheetModal";
import jsxProd from "jsxProd";

let closure_6;
let error;
const require = arg1;
function IdentityApplicationRow(arg0) {
  let applicationId;
  let onPress;
  ({ applicationId, onPress } = arg0);
  let obj = require(10162) /* request */;
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    let tmp6Result = null;
    if (null != bot) {
      obj = { user: null, size: null, guildId: "Array" };
      obj[0] = bot;
      obj[1] = tmp(1297).AvatarSizes.XSMALL;
      tmp6Result = tmp6(tmp(1297).Avatar, obj);
    }
    obj = { icon: null, label: null, subLabel: null, onPress: null };
    obj[0] = tmp6Result;
    obj[1] = getOrFetchApplicationBatched.name;
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    obj[2] = description;
    obj[3] = onPress;
    return closure_6(tmp(5286).TableRow, obj);
  }
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default function SelectConnectionActionSheet(arg0) {
  let _slicedToArray;
  let dependencyMap;
  let gameApplicationIds;
  let importDefault;
  let integrations;
  let onCompleteIdentityApplication;
  let require;
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  let closure_5;
  closure_5 = importDefault(4191)();
  let obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Sm0YG7);
  const tmp5 = callback(onCompleteIdentityApplication.useState(0), 2);
  const first = tmp5[0];
  let found;
  if (integrations != null) {
    found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (application != null) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !set2.has(id);
      }
      return tmp2;
    });
  }
  let tmp3Result = tmp3(6859);
  const platforms = tmp3Result.usePlatforms();
  const found1 = platforms.filter((type) => !set.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    let closure_0 = icon;
    let obj = outer1_0(outer1_2[11]);
    icon = icon.icon;
    const source = obj.makeSource(outer1_0(outer1_2[12]).isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    obj = { icon: null, label: null, onPress: null };
    obj[0] = outer1_6(outer1_0(outer1_2[6]).Icon, { source, disableColor: true });
    obj[1] = icon.name;
    obj[2] = function onPress() {
      icon(icon.type);
      outer2_1(outer2_2[13]).hideActionSheet();
    };
    return outer1_6(outer1_0(outer1_2[5]).TableRow, obj, "row-" + icon.type);
  });
  if (found != null) {
    mapped1 = found.map((application) => {
      application = application.application;
      let tmp = null;
      if (null != application) {
        let obj = { icon: null, label: null, subLabel: null, onPress: null };
        obj = { user: null, size: null, guildId: "Array" };
        obj[0] = application.bot;
        obj[1] = outer1_0(outer1_2[6]).AvatarSizes.XSMALL;
        obj[0] = outer1_6(outer1_0(outer1_2[6]).Avatar, obj);
        obj[1] = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj[2] = description;
        obj[3] = function onPress() {
          outer1_3(application.id);
          outer2_1(outer2_2[13]).hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = outer1_6(outer1_0(outer1_2[5]).TableRow, obj, "row-" + application.id);
        const tmp2 = outer1_6;
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((arg0) => !set2.has(arg0));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((applicationId) => {
      let closure_0 = applicationId;
      return outer1_6(outer1_8, {
        applicationId,
        onPress() {
          outer1_4(closure_0);
          outer2_1(outer2_2[13]).hideActionSheet();
        }
      }, "row-identity-" + applicationId);
    });
  } else {
    mapped2 = [];
  }
  let num;
  if (mapped1 != null) {
    num = mapped1.length;
  }
  if (num == null) {
    num = 0;
  }
  const intl2 = tmp3(1236).intl;
  const items = [intl2.string(require(1236) /* getSystemLocale */.t["3fe7U5"])];
  if (num > 0) {
    const intl3 = tmp3(1236).intl;
    items.push(intl3.string(tmp3(1236).t.PHjkRE));
  }
  if (mapped2.length > 0) {
    const intl4 = tmp3(1236).intl;
    items.push(intl4.string(tmp3(1236).t.y3ZnnU));
  }
  tmp3Result = tmp3(8535);
  obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp5[1], items: items.map((id) => ({ id, label: id, page: null })) };
  const segmentedControlState = tmp3Result.useSegmentedControlState(obj);
  if (1 === first) {
    if (tmp10) {
      mapped2 = mapped1;
    }
    let tmp15 = mapped2;
  } else {
    tmp15 = mapped;
    if (2 === first) {
      tmp15 = mapped2;
    }
  }
  obj = { scrollable: true, header: callback2(require(5308) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), startExpanded: true, children: null };
  if (num > 0) {
    const obj1 = { children: null };
    const obj2 = { state: null };
    obj2[0] = segmentedControlState;
    obj1[0] = tmp2(tmp3(8941).SegmentedControl, obj2);
    let tmp2Result = tmp2(closure_5, obj1);
  } else {
    tmp2Result = null;
  }
  const items1 = [tmp2Result, ];
  const obj3 = { children: null };
  const obj4 = { bottom: true, children: null };
  obj4[1] = callback2(require(5620) /* TableRowGroupTitle */.TableRowGroup, { hasIcons: true, children: tmp15 });
  obj3[0] = callback2(require(5243) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  items1[1] = callback2(require(5311) /* BottomSheetModal */.BottomSheetScrollView, obj3);
  obj[3] = items1;
  return closure_7(require(5617) /* ActionSheet */.ActionSheet, obj);
};