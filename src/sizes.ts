import {CSSProperties} from "react";

export const sizeStyles = {
    '46mm': {
        small: {
            photo: {
                margin: '12px 18px 60px',
                top: '15px',
                width: '207px',
                height: '288px'
            } as CSSProperties,
            frame: {  width: '243px',
                height: '378px',
                minWidth: '243px',
                minWeight: '378px',
            } as CSSProperties
        },
        large: {
            photo: {
                margin: '16px 24px 80px',
                top: '20px',
                width: '276px',
                height: '384px'
            } as CSSProperties,
            frame: {
                width: '324px',
                height: '504px',
                minWidth: '324px',
                minWeight: '504px',
            } as CSSProperties
        }
    },
    '99mm': {
        small: {
            photo: {
                margin: '12px 18px 60px',
                position: 'absolute',
                top: '15px',
                width: '445.5px',
                height: '288px',
            } as CSSProperties,
            frame: {
                width: '486px',
                height: '378px',
                minWidth: '486px',
                minHeight: '378px'
            } as CSSProperties
        },
        large: {
            photo: {
                margin: '16px 24px 80px',
                position: 'absolute',
                top: '20px',
                width: '594px',
                height: '384px'
            } as CSSProperties,
            frame: {
                width: '648px',
                height: '504px',
                minWidth: '648px',
                minHeight: '504px'
            } as CSSProperties
        }
    }
}
