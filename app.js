const searchCenderConfig = { serverId: 10083, active: true };

const searchCenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_10083() {
    return searchCenderConfig.active ? "OK" : "ERR";
}

console.log("Module searchCender loaded successfully.");