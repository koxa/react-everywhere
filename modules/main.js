define("main", ['react', 'jsx'], function(React, JSX) {
    /** @jsx React.DOM */
      var HelloMessage = React.createClass({
            render: function() {
                return <div>Hello {this.props.name}</div>;
            }
        });

   React.render(<HelloMessage name = "John"/> , document.body); 
});