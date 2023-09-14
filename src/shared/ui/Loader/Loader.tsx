import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoadersProps {
    className?: string
}

export const Loader = ({ className }: LoadersProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
