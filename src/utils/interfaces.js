const domain = 'https://lit-lowlands-28049.herokuapp.com/';
const interfaces = {
    // 获取openID的接口
    getOpenid: domain + 'api/profiles/getOpenid',
    getMyLesson: domain + 'api/profiles/mylessons',
}

module.exports = interfaces;