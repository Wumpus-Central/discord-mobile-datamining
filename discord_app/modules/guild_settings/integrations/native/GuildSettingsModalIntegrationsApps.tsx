// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationsApps.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowTrailingText from "../../../../design/components/TableRow/native/TableRowTrailingText.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let jsx = fn(21).jsx;
const createStyles = fn(5012);
let obj2 = { icon: null };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xs };
obj2.icon = size;
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationsApps.tsx",
);

export default function GuildSettingsModalIntegrationsApps(title) {
  ({ apps, removableApplicationIds: require, onRemove: importDefault, renderIcon: dependencyMap } = title);
  let text;
  jsx = text();
  let intl = util.intl;
  text = intl.string(util.t.N86XcP);
  return jsx(TableRowGroup.TableRowGroup, {
    title: title.title,
    hasIcons: true,
    children: apps.map((application) => {
      closure_0 = application;
      application = application.application;
      let tmp;
      if (dependencyMap != null) {
        tmp = dependencyMap(application);
      }
      if (tmp == null) {
        const obj = { source: null, style: null };
        const tmp5 = FastImageDefault;
        ({ id: obj3.id, icon: obj3.icon } = application);
        obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 24 });
        obj.style = closure_3.icon;
        tmp = closure_3(tmp5, obj);
        const obj5 = { id: null, icon: null, size: 24 };
      }
      if (null != closure_0) {
        if (!obj4.includes(application.id)) {
          const obj6 = { label: application.name, subLabel: null, icon: null };
          const intl = util.intl;
          obj6.subLabel = intl.string(util.t.xRCMqx);
          obj6.icon = tmp;
          let tmp15 = closure_3(TableRow.TableRow, obj6, application.integrationId);
        }
        return tmp15;
      }
      const obj7 = {
        label: application.name,
        icon: tmp,
        trailing: closure_3(TableRowTrailingText.TableRowTrailingText, { text }),
        onPress() {
          return importDefault(closure_0);
        },
      };
      tmp15 = closure_3(TableRow.TableRow, obj7, application.integrationId);
      const obj11 = { text };
      obj4 = closure_0;
    }),
  });
}
