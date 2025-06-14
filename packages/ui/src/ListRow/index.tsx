import type {HTMLAttributes, ReactNode} from 'react'
import classNames from 'classnames/bind'
import {Flex} from '../Flex'
import {Text} from '../Text'

import styles from './ListRow.module.scss'

const cx = classNames.bind(styles)

interface ListRowProps extends HTMLAttributes<HTMLLIElement> {
    left?: ReactNode
    contents: ReactNode
    right?: ReactNode
}

export function ListRow({contents, left, right, ...props}: ListRowProps) {
    return (
        <li className={cx('article')} {...props}>
            <Flex>
                {left != null ? <Flex style={{padding: '8px 4px'}}>{left}</Flex> : null}
                <Flex style={{padding: '8px 4px', flex: 1}} justify="between" align="center">
                    {contents}
                    {right != null ? right : null}
                </Flex>
            </Flex>
        </li>
    )
}

interface ListRowTextsProps {
    title: ReactNode
    subTitle?: ReactNode
}

function ListRowTexts({title, subTitle}: ListRowTextsProps) {
    return (
        <Flex direction="column">
            <Text size="t6" bold>
                {title}
            </Text>
            {subTitle != null ? (
                <Text size="t7" color="adaptiveGrey600">
                    {subTitle}
                </Text>
            ) : null}
        </Flex>
    )
}

ListRow.Texts = ListRowTexts
