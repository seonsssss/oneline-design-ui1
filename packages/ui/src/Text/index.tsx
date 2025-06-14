import classNames from 'classnames/bind'
import styles from './Text.module.scss'
import type {Color} from '../colors'
import {Fragment} from 'react/jsx-runtime'
import type {HTMLAttributes} from 'react'

const cx = classNames.bind(styles)

export type Size = 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 't7'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    color?: Color
    size?: Size
    bold?: boolean
    inline?: boolean
}

export function Text({
    children,
    color = 'adaptiveGrey900',
    size = 't3',
    bold = false,
    inline = false,
    className,
    onBlur,
    ...props
}: TextProps = {}) {
    if (typeof children !== 'string') {
        return (
            <div
                className={cx({
                    [`color-${color}`]: color,
                    [`typography-${size}`]: true,
                    bold,
                    inline,
                    className,
                })}
                {...props}
            >
                {children}
            </div>
        )
    }

    return (
        <div
            className={cx({
                [`color-${color}`]: color,
                [`typography-${size}`]: true,
                bold,
                inline,
                className,
            })}
            {...props}
        >
            {children.split('\\n').map((text: string, idx: number) => (
                <Fragment key={idx}>
                    {text}
                    <br />
                </Fragment>
            ))}
        </div>
    )
}
