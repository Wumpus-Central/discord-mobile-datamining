// discord_app/modules/user_profile/native/UserProfileGameFriendsCard.tsx
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import ApplicationIconAndNameDefault from "ApplicationIconAndName.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const UserProfileCardDefault = tmp2(7207);
const require = fn;
let jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ card: { flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendsCard.tsx");

export default function UserProfileGameFriendsCard(arg0) {
  importDefault = undefined;
  dependencyMap = undefined;
  jsx = undefined;
  ({ applicationIds, style } = arg0);
  const tmp = closure_4();
  const found = useGetOrFetchApplicationsDefault(applicationIds).filter((item) => null != item);
  if (0 === found.length) {
    return null;
  } else {
    importDefault = "text-md/normal";
    if (1 === found.length) {
      const intl2 = found(1114).intl;
      let obj = {
        applicationName() {
          return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant, iconSize: 16 }, found[0].id);
        },
      };
      let formatResult = intl2.format(found(1114).t.wQ6urw, obj);
      let tmp6 = found;
    } else if (2 === found.length) {
      const intl = found(1114).intl;
      obj = {
        applicationName() {
          return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant, iconSize: 16 }, found[0].id);
        },
        applicationName2() {
          return jsx(ApplicationIconAndNameDefault, { application: found[1], textVariant, iconSize: 16 }, found[1].id);
        },
      };
      formatResult = intl.format(found(1114).t.C98CSN, obj);
      tmp6 = found;
    } else {
      dependencyMap = found[found.length - 1];
      jsx = found.slice(0, -1);
      const intl4 = found(1114).intl;
      obj = {
        applications() {
          return closure_3.map((application) =>
            closure_3(
              textVariant(closure_2[5]),
              { application, useComma: true, textVariant, iconSize: 16 },
              application.id,
            ),
          );
        },
        applicationNameLast() {
          return jsx(ApplicationIconAndNameDefault, { application, textVariant, iconSize: 16 });
        },
      };
      formatResult = intl4.format(found(1114).t.UxpwAh, obj);
      tmp6 = found;
    }
    const obj1 = { style: null, title: null, children: null };
    const items = [tmp.card, style];
    obj1.style = items;
    const intl3 = tmp6(1114).intl;
    obj1.title = intl3.string(tmp6(1114).t["Uv/eTx"]);
    const obj2 = { variant: "text-md/normal", color: "text-default", children: formatResult };
    obj1.children = jsx(tmp6(4556).Text, { variant: "text-md/normal", color: "text-default", children: formatResult });
    return jsx(UserProfileCardDefault, { style: null, title: null, children: null });
  }
  const arr = useGetOrFetchApplicationsDefault(applicationIds);
}
