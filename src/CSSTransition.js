import CSSTransition from 'react-transition-group/CSSTransition';
import Transition from './Transition';

class ReactWidgetCSSTransition extends CSSTransition {

    render() {
        const props = { ...this.props };

        delete props.classNames;

        return (
            <Transition
                {...props}
                onEnter={this.onEnter}
                onEntered={this.onEntered}
                onEntering={this.onEntering}
                onExit={this.onExit}
                onExiting={this.onExiting}
                onExited={this.onExited}
            />
        );
    }
}

ReactWidgetCSSTransition.propTypes = { ...CSSTransition.propTypes };

export default ReactWidgetCSSTransition;