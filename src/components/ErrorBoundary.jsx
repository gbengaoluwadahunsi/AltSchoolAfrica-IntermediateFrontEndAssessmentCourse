import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI when an error occurs
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.error('Error caught by error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error UI here
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children; // Render children normally
  }
}

export default ErrorBoundary;
