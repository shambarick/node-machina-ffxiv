const MachinaModels = require("./_MachinaModels.js");

const AIRSHIP_DATA_LENGTH = 36;

module.exports = async (struct) => {
    struct.rank = MachinaModels.getUint16(struct.data, 0x06 + (i * AIRSHIP_DATA_LENGTH));
    struct.capacity = MachinaModels.getUint16(struct.data, 0x08 + (i * AIRSHIP_DATA_LENGTH));

    struct.hull = MachinaModels.getUint16(struct.data, 0x16 + (i * AIRSHIP_DATA_LENGTH));
    struct.rigging = MachinaModels.getUint16(struct.data, 0x18 + (i * AIRSHIP_DATA_LENGTH));
    struct.forecastle = MachinaModels.getUint16(struct.data, 0x1A + (i * AIRSHIP_DATA_LENGTH));
    struct.aftcastle = MachinaModels.getUint16(struct.data, 0x1C + (i * AIRSHIP_DATA_LENGTH));

    struct.name = MachinaModels.getString(struct.data, 0x1E + (i * AIRSHIP_DATA_LENGTH), 24);
};
