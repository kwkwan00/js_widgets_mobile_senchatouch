//controller.TestController = Ext.Controller({
//	listPeople: function(options) {
//		
//	}
//});

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
    	Ext.regModel("PeopleData", {
    		fields: [
	    		{ name: 'firstName', type: 'string' },
	    		{ name: 'lastName', type: 'string' }
    		]
    	});
    	
    	var peopleStore = new Ext.data.Store({
    		storeId: 'PeopleStore',
    		model: 'PeopleData',
    		sorters: 'lastName',
    	    getGroupString : function(record) {
    	        return record.get('firstName')[0];
    	    },
    		data: [
    		   {firstName: 'A', lastName: 'Guy00'},
    	       {firstName: 'That', lastName: 'Guy00'},
    	       {firstName: 'That', lastName: 'Guy01'},
    	       {firstName: 'That', lastName: 'Guy02'},
    	       {firstName: 'That', lastName: 'Guy03'},
    	       {firstName: 'That', lastName: 'Guy04'},
    	       {firstName: 'That', lastName: 'Guy05'},
    	       {firstName: 'That', lastName: 'Guy06'},
    	       {firstName: 'That', lastName: 'Guy07'},
    	       {firstName: 'That', lastName: 'Guy08'},
    	       {firstName: 'That', lastName: 'Guy09'},
    	       {firstName: 'That', lastName: 'Guy10'},
    	       {firstName: 'That', lastName: 'Guy11'},
    	       {firstName: 'That', lastName: 'Guy12'},
    	       {firstName: 'That', lastName: 'Guy12'},
    	       {firstName: 'That', lastName: 'Guy13'},
    	       {firstName: 'That', lastName: 'Guy14'},
    	       {firstName: 'That', lastName: 'Guy15'},
    	       {firstName: 'That', lastName: 'Guy16'},
    	       {firstName: 'That', lastName: 'Guy17'},
    	       {firstName: 'That', lastName: 'Guy18'},
    	       {firstName: 'That', lastName: 'Guy19'},
    	       {firstName: 'That', lastName: 'Guy20'}
    	    ]
    	});
    	
        var groupingBase = {
            itemTpl: '<div class="contact2"><strong>{firstName}</strong> {lastName}</div>',
            selModel: {
                mode: 'SINGLE',
                allowDeselect: true
            },
            grouped: true,
            indexBar: false,

            onItemDisclosure: {
                scope: 'test',
                handler: function(record, btn, index) {
                    alert('Disclose more info for ' + record.get('firstName'));
                }
            },
            store: peopleStore
        }
        
        if (!Ext.is.Phone) {
            new Ext.List(Ext.apply(groupingBase, {
                floating: true,
                width: 320,
                height: 370,
                centered: true,
                modal: true,
                hideOnMaskTap: false
            })).show();
        }
        else {
            new Ext.List(Ext.apply(groupingBase, {
                fullscreen: true
            }));
        }
    }
});