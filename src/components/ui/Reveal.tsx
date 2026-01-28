import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface RevealProps extends PropsWithChildren {
    delay?: number;
    width?: 'fit-content' | '100%';
    blur?: boolean;
}

export const Reveal = ({ children, delay = 0, width = 'fit-content', blur = false }: RevealProps) => {
    return (
        <div style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 12, filter: blur ? 'blur(4px)' : 'blur(0px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const RevealHorizontal = ({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) => {
    return (
        <motion.div
            variants={{
                hidden: { scaleX: 0, originX: 0 },
                visible: { scaleX: 1, originX: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay, ease: "easeOut" }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    )
}
