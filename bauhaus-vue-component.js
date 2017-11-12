
// Creating a new Vue instance and pass in an options object.
var demo = new Vue({
  
      // A DOM element to mount our view model.
      el: '#layout',
  
      // Define properties and give them initial values.
      data: {
          show_tooltip: false,
          text_content: 'Edit me.',
          who: 'Who',
          description: 'A event',
          title: 'Title',
          what: 'What',
          number: '123',
          word: 'Location',
          address1: 'Room #',
          address2: 'Name of building',
          address3: 'Address cont.',
          contact1: 'Contact',
          contact2: 'Email',
          contact3: 'Website'
      },
  
      // Functions we will be using.
      methods: {
          hideTooltip: function(){
              // When a model is changed, the view will be automatically updated.
              this.show_tooltip = false;
          },
          toggleTooltip: function(){
              this.show_tooltip = !this.show_tooltip;
          }
      }
  });