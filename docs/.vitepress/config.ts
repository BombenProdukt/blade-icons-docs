import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Blade Icons',
	description: 'A package to easily use icon families with Laravel Blade.',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		editLink: {
			pattern:
				'https://github.com/faustbrian/blade-icons-docs/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Installation', link: '/installation' },
		],

		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ text: 'Installation', link: '/installation' },
				],
			},
			{
				text: 'Families',
				items: [
					{ text: 'Academicons', link: '/families/academicons' },
					{ text: 'Akar Icons', link: '/families/akar-icons' },
					{ text: 'Anron', link: '/families/anron' },
					{
						text: 'Ant Design Icons',
						link: '/families/ant-design-icons',
					},
					{
						text: 'Bootstrap Icons',
						link: '/families/bootstrap-icons',
					},
					{ text: 'Boxicons', link: '/families/boxicons' },
					{
						text: 'Bytesize Icons',
						link: '/families/bytesize-icons',
					},
					{ text: 'Carbon Icons', link: '/families/carbon-icons' },
					{ text: 'Clarity Icons', link: '/families/clarity-icons' },
					{ text: 'Codicons', link: '/families/codicons' },
					{ text: 'Coolicons', link: '/families/coolicons' },
					{ text: 'CoreUI Icons', link: '/families/coreui-icons' },
					{
						text: 'Cryptocurrency Icons',
						link: '/families/cryptocurrency-icons',
					},
					{ text: 'CSS Icons', link: '/families/css-icons' },
					{ text: 'Devicons', link: '/families/devicons' },
					{ text: 'Elusive Icons', link: '/families/elusive-icons' },
					{ text: 'Emblemicons', link: '/families/emblemicons' },
					{ text: 'Entypo', link: '/families/entypo' },
					{ text: 'Eos Icons', link: '/families/eos-icons' },
					{ text: 'Eva Icons', link: '/families/eva-icons' },
					{ text: 'Evil Icons', link: '/families/evil-icons' },
					{ text: 'Feather Icons', link: '/families/feather-icons' },
					{ text: 'File Icons', link: '/families/file-icons' },
					{ text: 'Flag Icons', link: '/families/flag-icons' },
					{
						text: 'Fluent UI System Icons',
						link: '/families/fluent-ui-system-icons',
					},
					{ text: 'Font Awesome', link: '/families/font-awesome' },
					{
						text: 'Font Awesome Pro',
						link: '/families/font-awesome-pro',
					},
					{ text: 'Fontaudio', link: '/families/fontaudio' },
					{ text: 'Fontisto', link: '/families/fontisto' },
					{ text: 'Fork Awesome', link: '/families/fork-awesome' },
					{
						text: 'Google Material Design Icons',
						link: '/families/google-material-design-icons',
					},
					{ text: 'Govicons', link: '/families/govicons' },
					{ text: 'Grommet Icons', link: '/families/grommet-icons' },
					{ text: 'Health Icons', link: '/families/health-icons' },
					{ text: 'Heroicons', link: '/families/heroicons' },
					{ text: 'Icomoon', link: '/families/icomoon' },
					{
						text: 'Icomoon Essential',
						link: '/families/icomoon-essential',
					},
					{
						text: 'Icomoon Ultimate',
						link: '/families/icomoon-ultimate',
					},
					{ text: 'Iconic', link: '/families/iconic' },
					{ text: 'Iconic Pro', link: '/families/iconic-pro' },
					{ text: 'Iconoir', link: '/families/iconoir' },
					{ text: 'Iconpark', link: '/families/iconpark' },
					{ text: 'Iconsax', link: '/families/iconsax' },
					{ text: 'Ikonate', link: '/families/ikonate' },
					{ text: 'Ionicons', link: '/families/ionicons' },
					{ text: 'Jam Icons', link: '/families/jam-icons' },
					{ text: 'Lindua', link: '/families/lindua' },
					{ text: 'Line Awesome', link: '/families/line-awesome' },
					{ text: 'Linearicons', link: '/families/linearicons' },
					{
						text: 'Linearicons Premium',
						link: '/families/linearicons-premium',
					},
					{ text: 'Lucide', link: '/families/lucide' },
					{ text: 'Majesticons', link: '/families/majesticons' },
					{
						text: 'Majesticons Pro',
						link: '/families/majesticons-pro',
					},
					{ text: 'Maki Icons', link: '/families/maki-icons' },
					{ text: 'Microns', link: '/families/microns' },
					{ text: 'Mono Icons', link: '/families/mono-icons' },
					{ text: 'Octicons', link: '/families/octicons' },
					{ text: 'Pepicons', link: '/families/pepicons' },
					{
						text: 'Phosphor Flat Icons',
						link: '/families/phosphor-flat-icons',
					},
					{
						text: 'Phosphor Icons',
						link: '/families/phosphor-icons',
					},
					{ text: 'Pixelarticons', link: '/families/pixelarticons' },
					{
						text: 'Pixelarticons Pro',
						link: '/families/pixelarticons-pro',
					},
					{ text: 'Polaris Icons', link: '/families/polaris-icons' },
					{ text: 'Prime Icons', link: '/families/prime-icons' },
					{ text: 'Radix Icons', link: '/families/radix-icons' },
					{ text: 'Remix Icon', link: '/families/remix-icon' },
					{ text: 'Rpg Awesome', link: '/families/rpg-awesome' },
					{ text: 'Simple Icons', link: '/families/simple-icons' },
					{
						text: 'Simple Line Icons',
						link: '/families/simple-line-icons',
					},
					{ text: 'System Uicons', link: '/families/system-uicons' },
					{ text: 'Tabler Icons', link: '/families/tabler-icons' },
					{ text: 'Teenyicons', link: '/families/teenyicons' },
					{ text: 'Twemoji', link: '/families/twemoji' },
					{ text: 'Typicons', link: '/families/typicons' },
					{ text: 'Uiw Icons', link: '/families/uiw-icons' },
					{ text: 'Unicons', link: '/families/unicons' },
					{ text: 'Vaadin Icons', link: '/families/vaadin-icons' },
					{ text: 'Weather Icons', link: '/families/weather-icons' },
					{ text: 'Yr Weather', link: '/families/yr-weather' },
					{ text: 'Zondicon', link: '/families/zondicon' },
				],
			},
		],

		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/faustbrian/blade-icons',
			},
		],

		search: {
			provider: 'local',
		},
	},
});
