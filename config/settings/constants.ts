// App应用信息
export const AppInfo = {
	name: 'demo-project', // 应用名称
	systemId: '1', // 系统id
	sourceName: '111', // 静态资源
	interfaceVtrade: '222', // 平台接口地址域名
	interfaceVbkr: '333', // 金融接口地址域名
};

export enum RuntimeEnvironment {
	Dev,
	Daily,
	Feature,
	Beta,
	Prod,
}

export enum Platform {
	VTRADE,
	VBKR,
}

// 静态资源（平台和金融的相同）
export const StaticResourceDomain = {
	[Platform.VTRADE]: `//r<%= environment %>${AppInfo.sourceName}/fe/<%= app %>/<%= environment %>/`,
	[Platform.VBKR]: `//r<%= environment %>${AppInfo.sourceName}/fe/<%= app %>/<%= environment %>/`,
};

// 接口域名（平台和金融的不=同）
export const APIDomain = {
	[Platform.VTRADE]: `//admin-<%= environment %>${AppInfo.interfaceVtrade}`,
	[Platform.VBKR]: `//admin-<%= environment %>${AppInfo.interfaceVbkr}`,
};
