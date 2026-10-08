// discord_app/modules/user_settings/connections/native/AddConnectionActionSheet.tsx
import Constants from "../../../../Constants.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import UserApplicationIdentityConstants from "../../../user_application_identity/UserApplicationIdentityConstants.tsx";
import shared from "../../../../design/shared.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import native from "../../../../design/void/native.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const AnalyticsLocations = Constants.AnalyticsLocations;
let closure_4 = UserApplicationIdentityConstants.getMigratedApplicationIdentityConnectionsScreenApplications;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { list: { paddingHorizontal: 16 }, icon: null };
let obj2 = { borderRadius: null };
obj2.borderRadius = native.getIconSize(native.Icon.Sizes.LARGE);
obj.icon = obj2;
let closure_7 = createStyles.createStyles(obj);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddApplicationIdentityTableRow(arg0) {
      const cResult = startAuthorization(576).c(17);
      ({ application, start, end } = arg0);
      const tmp4 = analyticsLocations(6844)(application);
      startAuthorization = tmp4.startAuthorization;
      const obj = startAuthorization(576);
      analyticsLocations = analyticsLocations(6841)(analyticsLocations(6865).ACTION_SHEET).analyticsLocations;
      const tmp6 = closure_7();
      if (cResult[0] !== application) {
        const iconSource = application.getIconSource(tmp(1200).getIconSize(tmp(1200).IconSizes.LARGE));
        cResult[0] = application;
        cResult[1] = iconSource;
        let tmp7 = iconSource;
        const tmpResult = tmp(1200);
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === analyticsLocations) {
        if (cResult[3] === startAuthorization) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === tmp7) {
          if (cResult[6] === tmp6) {
            let tmp10 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp16 = closure_5(tmp(6184).TableRow.Arrow, {});
            cResult[8] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] === application.id) {
            if (cResult[10] === application.name) {
              if (cResult[11] === end) {
                if (cResult[12] === start) {
                  if (cResult[13] === tmp9) {
                    if (cResult[14] === tmp10) {
                      if (cResult[15] === tmp17) {
                        let tmp18 = cResult[16];
                      }
                      return tmp18;
                    }
                  }
                }
              }
            }
          }
          const obj2 = {
            start,
            end,
            label: application.name,
            onPress: tmp9,
            icon: tmp10,
            trailing: tmp14,
            disabled: !tmp4.canStartAuthorization,
          };
          const tmp20 = closure_5(tmp(6184).TableRow, obj2, application.id);
          cResult[9] = application.id;
          cResult[10] = application.name;
          cResult[11] = end;
          cResult[12] = start;
          cResult[13] = tmp9;
          cResult[14] = tmp10;
          cResult[15] = !tmp4.canStartAuthorization;
          cResult[16] = tmp20;
          tmp18 = tmp20;
        }
        let tmp11 = null;
        if (null != tmp7) {
          const obj3 = { source: tmp7, style: tmp6.icon, disableColor: true };
          tmp11 = closure_5(tmp(1200).Icon, obj3);
        }
        cResult[5] = tmp7;
        cResult[6] = tmp6;
        cResult[7] = tmp11;
        tmp10 = tmp11;
      }
      const fn = function y() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        startAuthorization({ analyticsLocations });
      };
      cResult[2] = analyticsLocations;
      cResult[3] = startAuthorization;
      cResult[4] = fn;
      tmp9 = fn;
      const tmp5 = analyticsLocations(6841);
    }
  : function AddApplicationIdentityTableRow(application) {
      application = application.application;
      _require = undefined;
      let analyticsLocations;
      ({ start, end } = application);
      ({ startAuthorization: c0, canStartAuthorization } = analyticsLocations(6844)(application));
      const tmp2 = analyticsLocations(6844)(application);
      analyticsLocations = analyticsLocations(6841)(analyticsLocations(6865).ACTION_SHEET).analyticsLocations;
      const tmp3 = analyticsLocations(6841);
      const tmp4 = closure_7();
      const iconSource = application.getIconSource(require("native").getIconSize(require("native").IconSizes.LARGE));
      const obj2 = {
        start,
        end,
        label: application.name,
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          _undefined({ analyticsLocations });
        },
        icon: null,
        trailing: null,
        disabled: null,
      };
      let tmp7Result = null;
      if (null != iconSource) {
        const obj3 = { source: iconSource, style: tmp4.icon, disableColor: true };
        tmp7Result = closure_5(tmp5(1200).Icon, obj3);
      }
      obj2.icon = tmp7Result;
      obj2.trailing = closure_5(require("TableRow").TableRow.Arrow, {});
      obj2.disabled = !canStartAuthorization;
      return closure_5(require("TableRow").TableRow, obj2, application.id);
    };
const result = size.fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AddConnectionActionSheet() {
      const cResult = require("c").c(16);
      let tmp4 = closure_7();
      _require = found(found1[7])();
      const bottom = found(found1[8])().bottom;
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
        let first = fn;
      } else {
        first = cResult[0];
      }
      let obj = require("c");
      const tmp5 = found;
      const platforms = require("ConnectionsHooks").usePlatforms();
      found = platforms.filter(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = closure_4("AddConnectionActionSheet");
        cResult[1] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function b(arg0) {
          return null != arg0;
        };
        cResult[2] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
      }
      const tmpResult = require("ConnectionsHooks");
      found1 = tmp5(found1[10])(tmp7).filter(tmp10);
      BottomSheet = tmp(tmp2[11]).BottomSheet;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null };
        const intl = tmp(tmp2[13]).intl;
        obj2.title = intl.string(tmp(tmp2[13]).t.Zhcj9X);
        const tmp13 = closure_5(tmp(tmp2[12]).BottomSheetTitleHeader, obj2);
        cResult[3] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[3];
      }
      const BottomSheetScrollView = tmp(tmp2[14]).BottomSheetScrollView;
      if (cResult[4] !== bottom) {
        const obj3 = { paddingBottom: bottom };
        cResult[4] = bottom;
        cResult[5] = obj3;
        let tmp14 = obj3;
      } else {
        tmp14 = cResult[5];
      }
      const mapped = found1.map((application, index) => {
        const obj = { application, start: 0 === index, end: null };
        let tmp3 = index === found1.length - 1;
        if (tmp3) {
          tmp3 = 0 === found.length;
        }
        obj.end = tmp3;
        return hasOwnProperty(closure_8, obj, application.id);
      });
      const mapped1 = found.map((label, index) => {
        const type = label.type;
        const icon = label.icon;
        let tmp4 = 0 === index;
        if (tmp4) {
          tmp4 = 0 === found1.length;
        }
        const obj = {
          start: tmp4,
          end: index === found.length - 1,
          label: label.name,
          onPress() {
            found(found1[16]).hideActionSheet();
            found(found1[17])({ platformType: type, location: constants.USER_SETTINGS });
          },
          icon: null,
          trailing: null,
        };
        const tmp2Result = AvatarUtils;
        const tmp2Result2 = shared;
        obj.icon = hasOwnProperty(native.Icon, {
          source: tmp2Result.makeSource(shared.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG),
          disableColor: true,
        });
        obj.trailing = hasOwnProperty(TableRow.TableRow.Arrow, {});
        return hasOwnProperty(TableRow.TableRow, obj, type);
      });
      if (cResult[6] === BottomSheetScrollView) {
        if (cResult[7] === tmp4.list) {
          if (cResult[8] === mapped1) {
            if (cResult[9] === tmp14) {
              if (cResult[10] === mapped) {
                let tmp17 = cResult[11];
              }
              if (cResult[12] === BottomSheet) {
                if (cResult[13] === tmp17) {
                  if (cResult[14] === tmp11) {
                    let tmp19 = cResult[15];
                  }
                  return tmp19;
                }
              }
              const obj4 = { scrollable: true, startExpanded: true, header: tmp11, children: tmp17 };
              const tmp21 = closure_5(BottomSheet, obj4);
              cResult[12] = BottomSheet;
              cResult[13] = tmp17;
              cResult[14] = tmp11;
              cResult[15] = tmp21;
              tmp19 = tmp21;
            }
          }
        }
      }
      const obj5 = { style: tmp4.list, contentContainerStyle: tmp14, children: null };
      const items = [mapped, mapped1];
      obj5.children = items;
      const tmp18 = closure_6(BottomSheetScrollView, obj5);
      cResult[6] = BottomSheetScrollView;
      cResult[7] = tmp4.list;
      cResult[8] = mapped1;
      cResult[9] = tmp14;
      cResult[10] = mapped;
      cResult[11] = tmp18;
      tmp17 = tmp18;
      const arr3 = tmp5(found1[10])(tmp7);
    }
  : function AddConnectionActionSheet() {
      _require = found(found1[7])();
      let tmp = closure_7();
      const platforms = require("ConnectionsHooks").usePlatforms();
      found = platforms.filter((migrationData) => {
        let tmp = null == migrationData.migrationData;
        if (!tmp) {
          migrationData = migrationData.migrationData;
          tmp = !migrationData.getMigrationExperimentEnabled("AddConnectionActionSheet");
        }
        return tmp;
      });
      let obj = require("ConnectionsHooks");
      const tmp2 = found(found1[10]);
      found1 = found(found1[10])(closure_4("AddConnectionActionSheet")).filter((item) => null != item);
      const obj2 = { scrollable: true, startExpanded: true, header: null, children: null };
      const obj3 = { title: null };
      const intl = require("util").intl;
      obj3.title = intl.string(require("util").t.Zhcj9X);
      obj2.header = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3);
      const obj4 = {
        style: tmp.list,
        contentContainerStyle: { paddingBottom: found(found1[8])().bottom },
        children: null,
      };
      const items = [
        found1.map((application, index) => {
          const obj = { application, start: 0 === index, end: null };
          let tmp3 = index === found1.length - 1;
          if (tmp3) {
            tmp3 = 0 === found.length;
          }
          obj.end = tmp3;
          return hasOwnProperty(closure_8, obj, application.id);
        }),
        found.map((label, index) => {
          const type = label.type;
          const icon = label.icon;
          let tmp4 = 0 === index;
          if (tmp4) {
            tmp4 = 0 === found1.length;
          }
          const obj = {
            start: tmp4,
            end: index === found.length - 1,
            label: label.name,
            onPress() {
              found(found1[16]).hideActionSheet();
              found(found1[17])({ platformType: type, location: constants.USER_SETTINGS });
            },
            icon: null,
            trailing: null,
          };
          const tmp2Result = AvatarUtils;
          const tmp2Result2 = shared;
          obj.icon = hasOwnProperty(native.Icon, {
            source: tmp2Result.makeSource(shared.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG),
            disableColor: true,
          });
          obj.trailing = hasOwnProperty(TableRow.TableRow.Arrow, {});
          return hasOwnProperty(TableRow.TableRow, obj, type);
        }),
      ];
      obj4.children = items;
      obj2.children = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj4);
      return closure_5(require("Sheet/BottomSheet").BottomSheet, obj2);
    };
