// discord_app/modules/app_database/modules/channels/ChannelReader.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import DatabaseDaosDefault from "../../DatabaseDaos.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c2, c3, c5, c6, closure_3, set, set2;

const _false = new LoggerDefault("ChannelReader");
new LoggerDefault("ChannelReader");
const result = size.fileFinishedImporting("modules/app_database/modules/channels/ChannelReader.tsx");
class ChannelReader {
  static getSync(databaseResult, guild_id) {
    const nowResult = performance.now();
    const obj = DatabaseDaosDefault;
    const channelsResult = obj.channels(databaseResult);
    const manySyncUnsafe = channelsResult.getManySyncUnsafe(guild_id);
    const diff = performance.now() - nowResult;
    logger.log(
      "synchronously loaded in " + diff + "ms (guild: " + guild_id + ", channels: " + manySyncUnsafe.length + ")",
    );
    const items = [manySyncUnsafe, diff];
    return items;
  }
  static getAsync(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let channelsResult;
      let value;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_2;
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value = undefined;
              closure_2 = undefined;
              const _performance2 = performance;
              tmp = performance.now();
              const obj6 = tmp(value[2]);
              c2 = 1;
              c3 = 1;
              const obj4 = { value: channelsResult.getMany(value), done: false };
              channelsResult = obj6.channels(tmp);
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const _performance = performance;
            closure_2 = performance.now() - tmp;
            const _HermesInternal = HermesInternal;
            c3.verbose("loaded in " + closure_2 + "ms (guild: " + closure_129_1 + ", channels: " + value.length + ")");
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp5) {
          c3 = 3;
          throw tmp5;
        }
      }
    })();
  }
  static getGuildIds() {
    return (async function () {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let closure_1;
          let closure_0;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              closure_1 = tmp4;
              closure_0 = undefined;
              c4 = 1;
              const obj8 = DatabaseDaosDefault;
              const channelsResult = obj8.channels();
              if (null == channelsResult) {
                const _Set3 = Set;
                const self5 = this;
                const self6 = this;
                set = new Set();
                c4 = 0;
                c6 = 3;
                const obj4 = { value: set, done: true };
                return obj4;
              } else {
                c5 = 2;
                c6 = 1;
                const obj5 = { value: channelsResult.getGuildIds(), done: false };
                return obj5;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            closure_130_3.warn("couldn't get guild ids", closure_1);
            const _Set2 = Set;
            const self3 = this;
            const self4 = this;
            const set1 = new Set();
            c6 = 3;
            const obj6 = { value: set1, done: true };
            return obj6;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            if (value == null) {
              closure_0 = [];
            }
            closure_0 = closure_0.filter((item) => null !== item && typeof item === "string");
            const _Set = Set;
            const self = this;
            const self2 = this;
            set2 = new Set(closure_0);
            c4 = 0;
            c6 = 3;
            const obj = { value: set2, done: true };
            return obj;
          }
        } catch (tmp21) {
          closure_3 = tmp21;
          if (0 === c4) {
            c6 = 3;
            throw tmp21;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  }
}

export default ChannelReader;
