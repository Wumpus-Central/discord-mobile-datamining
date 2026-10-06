// === Module 14781: AddConnectionActionSheet ===

// Module 14781 (AddConnectionActionSheet)
import Constants from "Constants" /* 1085 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2013 */;
import shared from "shared" /* 4735 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import TableRow2 from "TableRow" /* 6000 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import native_mod from "native" /* 1188 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, type;

let hasOwnProperty;
let metroRequire;
let native;
let obj2;
const AnalyticsLocations = Constants.AnalyticsLocations;
let closure_4 = UserApplicationIdentityConstants.getMigratedApplicationIdentityConnectionsScreenApplications;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: { paddingHorizontal: 16 }, icon: obj2 };
obj2 = { borderRadius: native.getIconSize(native.Icon.Sizes.LARGE) };
createStyles = createStyles.createStyles;
native = native_mod;
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let found;
  let found1;
  let intl;
  let items;
  let tmp7;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(16);
  let tmp4 = closure_7();
  _require = found(found1[7])();
  const bottom = found(found1[8])().bottom;
  const tmp5 = found;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(migrationData) {
      let tmp = null == migrationData.migrationData;
      if (!tmp) {
        migrationData = migrationData.migrationData;
        tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
      }
      return tmp;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(found1[9]);
  const platforms = tmpResult.usePlatforms();
  found = platforms.filter(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = closure_4("AddConnectionActionSheet");
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        return null != arg0;
      }
    }
    cResult[2] = A;
  } else {
    class A {
      constructor(arg0) {
        return null != arg0;
      }
    }
  }
  const arr3 = tmp5(found1[10])(tmp7);
  found1 = arr3.filter(A);
  BottomSheet = tmp(tmp2[11]).BottomSheet;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        return null != arg0;
      }
    }
    let obj2 = { title: intl.string(tmp(tmp2[13]).t.Zhcj9X) };
    const BottomSheetTitleHeader = tmp(tmp2[12]).BottomSheetTitleHeader;
    intl = tmp(tmp2[13]).intl;
    cResult[3] = closure_5(BottomSheetTitleHeader, obj2);
    const tmp12 = closure_5(BottomSheetTitleHeader, obj2);
  } else {
    class A {
      constructor(arg0) {
        return null != arg0;
      }
    }
  }
  const BottomSheetScrollView = tmp(tmp2[14]).BottomSheetScrollView;
  const list = tmp4.list;
  if (cResult[4] !== bottom) {
    class A {
      constructor(arg0) {
        return null != arg0;
      }
    }
    tmp14[0] = bottom;
    cResult[4] = bottom;
    cResult[5] = tmp14;
  } else {
    class A {
      constructor(arg0) {
        return null != arg0;
      }
    }
  }
  const mapped = found1.map((application, index) => {
    let tmp3;
    const obj = { application, start: 0 === index, end: tmp3 };
    tmp3 = index === found1.length - 1 && 0 === found.length;
    return hasOwnProperty(closure_8, obj, application.id);
  });
  const mapped1 = found.map((type, index) => {
    let Icon;
    let obj2;
    type = type.type;
    const icon = type.icon;
    const name = type.name;
    let tmp4 = 0 === index;
    const TableRow = TableRow2.TableRow;
    if (tmp4) {
      tmp4 = 0 === found1.length;
    }
    let obj = {
      start: tmp4,
      end: index === found.length - 1,
      label: name,
      onPress() {
        const obj = found(found1[16]);
        obj.hideActionSheet();
        const obj2 = { platformType: type, location: constants.USER_SETTINGS };
        found(found1[17])(obj2);
      },
      icon: hasOwnProperty(Icon, obj2),
      trailing: hasOwnProperty(TableRow2.TableRow.Arrow, {})
    };
    Icon = native.Icon;
    const makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    const tmp2Result2 = shared;
    obj2 = { source: makeSource(tmp2Result2.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG), disableColor: true };
    return hasOwnProperty(TableRow, obj, type);
  });
  if (cResult[6] === BottomSheetScrollView) {
    class A {
      constructor(arg0) {
        return null != arg0;
      }
    }
  }
  const obj3 = { style: list, contentContainerStyle: tmp14, children: items };
  items = [mapped, mapped1];
  cResult[6] = BottomSheetScrollView;
  cResult[7] = tmp4.list;
  cResult[8] = mapped1;
  cResult[9] = tmp14;
  cResult[10] = mapped;
  cResult[11] = closure_6(BottomSheetScrollView, obj3);
  closure_6(BottomSheetScrollView, obj3);
}) : (() => {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let closure_0;
  let found;
  let found1;
  let intl;
  let items;
  let obj3;
  let obj4;
  let tmp = closure_7();
  _require = found(found1[7])();
  const bottom = found(found1[8])().bottom;
  let obj = require("ConnectionsHooks");
  const platforms = obj.usePlatforms();
  found = platforms.filter((migrationData) => {
    let tmp = null == migrationData.migrationData;
    if (!tmp) {
      migrationData = migrationData.migrationData;
      tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
    }
    return tmp;
  });
  const tmp2 = found(found1[10]);
  const tmp2Result = tmp2(closure_4("AddConnectionActionSheet"));
  found1 = tmp2Result.filter((item) => null != item);
  let obj2 = { scrollable: true, startExpanded: true, header: closure_5(BottomSheetTitleHeader, obj3), children: closure_6(BottomSheetScrollView, obj4) };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  obj3 = { title: intl.string(require("intl").t.Zhcj9X) };
  BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl = require("intl").intl;
  obj4 = { style: tmp.list, contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  items = [
    found1.map((application, index) => {
      let tmp3;
      const obj = { application, start: 0 === index, end: tmp3 };
      tmp3 = index === found1.length - 1 && 0 === found.length;
      return hasOwnProperty(closure_8, obj, application.id);
    }),
    found.map((type, index) => {
      let Icon;
      let obj2;
      type = type.type;
      const icon = type.icon;
      const name = type.name;
      let tmp4 = 0 === index;
      const TableRow = TableRow2.TableRow;
      if (tmp4) {
        tmp4 = 0 === found1.length;
      }
      let obj = {
        start: tmp4,
        end: index === found.length - 1,
        label: name,
        onPress() {
          const obj = found(found1[16]);
          obj.hideActionSheet();
          const obj2 = { platformType: type, location: constants.USER_SETTINGS };
          found(found1[17])(obj2);
        },
        icon: hasOwnProperty(Icon, obj2),
        trailing: hasOwnProperty(TableRow2.TableRow.Arrow, {})
      };
      Icon = native.Icon;
      const makeSource = AvatarUtils.makeSource;
      AvatarUtils;
      const tmp2Result2 = shared;
      obj2 = { source: makeSource(tmp2Result2.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG), disableColor: true };
      return hasOwnProperty(TableRow, obj, type);
    })
  ];
  return closure_5(BottomSheet, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let application;
  let end;
  let start;
  let startAuthorization;
  let tmp7;
  let obj = startAuthorization(576);
  const cResult = obj.c(17);
  ({ application, start, end } = arg0);
  const tmp4 = analyticsLocations(6667)(application);
  startAuthorization = tmp4.startAuthorization;
  const canStartAuthorization = tmp4.canStartAuthorization;
  const tmp5 = analyticsLocations(6664);
  analyticsLocations = tmp5(analyticsLocations(6688).ACTION_SHEET).analyticsLocations;
  const tmp6 = closure_7();
  if (cResult[0] !== application) {
    const getIconSource = application.getIconSource;
    const tmpResult = startAuthorization(1188);
    const iconSource = getIconSource(tmpResult.getIconSize(tmp(1188).IconSizes.LARGE));
    cResult[0] = application;
    cResult[1] = iconSource;
    tmp7 = iconSource;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === analyticsLocations) {
    let tmp9;
    if (cResult[3] === startAuthorization) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      let tmp10;
      let tmp14;
      if (cResult[6] === tmp6) {
        tmp10 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = closure_5(startAuthorization(6000).TableRow.Arrow, {});
        cResult[8] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === application.id) {
        if (cResult[10] === application.name) {
          if (cResult[11] === end) {
            if (cResult[12] === start) {
              if (cResult[13] === tmp9) {
                if (cResult[14] === tmp10) {
                  let tmp18;
                  if (cResult[15] === !canStartAuthorization) {
                    tmp18 = cResult[16];
                  }
                  return tmp18;
                }
              }
            }
          }
        }
      }
      let obj2 = { start, end, label: application.name, onPress: tmp9, icon: tmp10, trailing: tmp14, disabled: !canStartAuthorization };
      const tmp20 = closure_5(startAuthorization(6000).TableRow, obj2, application.id);
      cResult[9] = application.id;
      cResult[10] = application.name;
      cResult[11] = end;
      cResult[12] = start;
      cResult[13] = tmp9;
      cResult[14] = tmp10;
      cResult[15] = !canStartAuthorization;
      cResult[16] = tmp20;
      tmp18 = tmp20;
    }
    let tmp11 = null;
    if (null != tmp7) {
      const obj3 = { source: tmp7, style: tmp6.icon, disableColor: true };
      tmp11 = closure_5(tmp(1188).Icon, obj3);
    }
    cResult[5] = tmp7;
    cResult[6] = tmp6;
    cResult[7] = tmp11;
    tmp10 = tmp11;
  }
  const fn = function y() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { analyticsLocations };
    startAuthorization(obj2);
  };
  cResult[2] = analyticsLocations;
  cResult[3] = startAuthorization;
  cResult[4] = fn;
  tmp9 = fn;
}) : ((application) => {
  let _undefined;
  let c0;
  let canStartAuthorization;
  let end;
  let start;
  let tmp7Result;
  application = application.application;
  _require = undefined;
  let analyticsLocations;
  ({ start, end } = application);
  ({ startAuthorization: c0, canStartAuthorization } = analyticsLocations(6667)(application));
  const tmp2 = analyticsLocations(6667)(application);
  const tmp3 = analyticsLocations(6664);
  analyticsLocations = tmp3(analyticsLocations(6688).ACTION_SHEET).analyticsLocations;
  const getIconSource = application.getIconSource;
  const tmp4 = closure_7();
  let obj = require("native");
  const iconSource = getIconSource(obj.getIconSize(require("native").IconSizes.LARGE));
  let obj2 = {
    start,
    end,
    label: application.name,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { analyticsLocations };
      _undefined(obj2);
    },
    icon: tmp7Result,
    trailing: closure_5(require("TableRow").TableRow.Arrow, {}),
    disabled: !canStartAuthorization
  };
  tmp7Result = null;
  const TableRow = require("TableRow").TableRow;
  if (null != iconSource) {
    const obj3 = { source: iconSource, style: tmp4.icon, disableColor: true };
    tmp7Result = closure_5(tmp5(1188).Icon, obj3);
  }
  return closure_5(TableRow, obj2, application.id);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default tmp4;