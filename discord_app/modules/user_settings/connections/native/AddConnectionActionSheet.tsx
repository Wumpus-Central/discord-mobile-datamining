import { AnalyticsLocations } from "ME";
import { getMigratedApplicationIdentityConnectionsScreenApplications as closure_4 } from "items1";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import Button from "Button";

let c5;
let closure_6;
function AddApplicationIdentityTableRow(application) {
  let c0;
  let canStartAuthorization;
  let end;
  let start;
  application = application.application;
  let _require;
  let analyticsLocations;
  ({ start, end } = application);
  ({ startAuthorization: c0, canStartAuthorization } = analyticsLocations(5522)(application));
  const tmp2 = analyticsLocations(5522)(application);
  analyticsLocations = analyticsLocations(5519)(analyticsLocations(5539).ACTION_SHEET).analyticsLocations;
  const tmp3 = analyticsLocations(5519);
  let obj = _require(1297);
  const iconSource = application.getIconSource(obj.getIconSize(_require(1297).IconSizes.LARGE));
  obj = {
    start,
    end,
    label: application.name,
    onPress() {
      let obj = analyticsLocations(outer1_2[14]);
      obj.hideActionSheet();
      obj = { analyticsLocations };
      _undefined(obj);
    },
    icon: null,
    trailing: null,
    disabled: null
  };
  let tmp7Result = null;
  if (null != iconSource) {
    obj = { source: null, style: null, disableColor: true };
    obj[0] = iconSource;
    obj[1] = tmp4.icon;
    tmp7Result = tmp7(tmp5(1297).Icon, obj);
  }
  obj[4] = tmp7Result;
  obj[5] = closure_5(_require(5224).TableRow.Arrow, {});
  obj[6] = !canStartAuthorization;
  return closure_5(_require(5224).TableRow, obj, application.id);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { list: { paddingHorizontal: 16 }, icon: null };
obj = { borderRadius: null };
obj[0] = Button.getIconSize(require("Button").Icon.Sizes.LARGE);
obj[1] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default function AddConnectionActionSheet() {
  const _require = found(found1[5])();
  let obj = _require(found1[7]);
  const platforms = obj.usePlatforms();
  found = platforms.filter((migrationData) => {
    let tmp = null == migrationData.migrationData;
    if (!tmp) {
      migrationData = migrationData.migrationData;
      tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
    }
    return tmp;
  });
  let tmp = callback4();
  const tmp2 = found(found1[8]);
  found1 = found(found1[8])(callback("AddConnectionActionSheet")).filter((arg0) => null != arg0);
  obj = { scrollable: true, startExpanded: true, header: null, children: null };
  obj = { title: null };
  const intl = _require(found1[11]).intl;
  obj[0] = intl.string(_require(found1[11]).t.Zhcj9X);
  obj[2] = callback2(_require(found1[10]).BottomSheetTitleHeader, obj);
  const obj1 = { style: tmp.list, contentContainerStyle: { paddingBottom: found(found1[6])().bottom }, children: null };
  const items = [
    found1.map((application) => {
      const obj = { application, start: 0 === arg1, end: null };
      let tmp3 = arg1 === found1.length - 1;
      if (tmp3) {
        tmp3 = 0 === found.length;
      }
      obj[2] = tmp3;
      return outer1_5(outer1_8, obj, application.id);
    }),
    found.map((label) => {
      const type = label.type;
      const icon = label.icon;
      let tmp4 = 0 === arg1;
      if (tmp4) {
        tmp4 = 0 === found1.length;
      }
      let obj = {
        start: tmp4,
        end: arg1 === found.length - 1,
        label: label.name,
        onPress() {
          let obj = outer1_1(outer1_2[14]);
          obj.hideActionSheet();
          obj = { platformType: type, location: outer1_3.USER_SETTINGS };
          outer1_1(outer1_2[15])(obj);
        },
        icon: null,
        trailing: null
      };
      let tmp2Result = tmp2(tmp3[16]);
      tmp2Result = tmp2(tmp3[17]);
      obj = { source: tmp2Result.makeSource(tmp2Result.isThemeDark(type) ? icon.darkPNG : icon.lightPNG), disableColor: true };
      obj[4] = outer1_5(callback(found1[4]).Icon, obj);
      obj[5] = outer1_5(callback(found1[13]).TableRow.Arrow, {});
      return outer1_5(callback(found1[13]).TableRow, obj, type);
    })
  ];
  obj1[2] = items;
  obj[3] = callback3(_require(found1[12]).BottomSheetScrollView, obj1);
  return callback2(_require(found1[9]).BottomSheet, obj);
};