// === Module 1963: TableId ===

// Module 1963 (TableId)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/types/index.tsx");

export const TableId = { Kv: "kv", KvCache: "kv_cache", Messages: "messages" };
export const MAXIMUM_KEY_BITS = 5;
export const Ordering = { Ascending: 0, [0]: "Ascending", Descending: 1, [1]: "Descending" };
export const DatabaseState = { Closed: 0, [0]: "Closed", Open: 1, [1]: "Open", Disabled: 2, [2]: "Disabled" };
export const ConflictOptions = { Skip: 0, [0]: "Skip", Replace: 1, [1]: "Replace" };