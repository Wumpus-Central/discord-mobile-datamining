// === Module 11963: directory_channels/GuildDirectoryUtils ===

// Module 11963 (directory_channels/GuildDirectoryUtils)
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let obj = function _onAddDirectoryGuildEntry() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let closure_1;
    let closure_0 = arg0;
    const obj4 = closure_130_2(closure_130_3[3]);
    await obj4.addDirectoryGuildEntry(c0, id.id, c3, c4);
    c5();
    obj = closure_130_1(closure_130_3[4]);
    const obj8 = {
      importer() {
        let directoryGuildName;
        let guild;
        const promise = closure_0(paths[6])(paths[5], paths.paths);
        return promise.then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            obj = { guild, directoryGuildName };
            const merged = Object.assign(arg0);
            return closure_3_5(closure_0, obj);
          };
        });
      },
      isDismissable: false
    };
    obj.openLazy(obj8);
    await "IconComponent";
    ({ directoryChannelId: c0, directoryGuildName: c1, guild: c2, description: c3, category: c4, onClose: c5 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryUtils.tsx");

export const onAddDirectoryGuildEntry = function onAddDirectoryGuildEntry() {
  return obj(...arguments);
};