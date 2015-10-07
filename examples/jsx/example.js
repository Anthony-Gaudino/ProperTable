let body = document.body;

$(() => {
	ProperTable.Settings.set({
		language: 'en'
	});

	var cols = [
		{
			name: 'col1',
			label: 'columna 1',
			field: 'col1',
			formatter: function(value) {
				return _.uniqueId(value + '-');
			}
		},
		{
			name: 'number',
			label: 'A number',
			field: 'number',
			className: 'number',
			formatter: ProperTable.formatters.number
		},
		{
			name: 'nested',
			label: 'columnas anidadas',
			uniqueId: 'miprueba_de_id',
			children: [
				{
					name: 'nested1',
					label: 'nested1',
					field: 'nested1',
					sortVal: function(value) {
						return moment(value).unix();
					},
					formatter: ProperTable.formatters.date
				},
				{
					name: 'nested2',
					label: 'nested2',
					field: 'nested2'
				}
			]
		}
	];

	var data = [];

	for (var i = 500; i >= 0; i--) {
		data.push({
			col1: 'added-'+i,
			nested1: moment().add((Math.round(Math.random() * 10000) % 2000), 'days').format('YYYY-MM-DD HH:mm:ss'),
			nested2: 'bar-'+i,
			number: (Math.round(Math.random() * 1000) % 20) + 1
		});
	};

	React.render(<ProperTable.Table key={'testtable'} cols={cols} data={data} afterSelect={function(data) {
		console.log('selected', data);
	}} />, body);
});